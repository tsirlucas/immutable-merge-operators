describe('Object merge operator', function () {
    const object = {
        name: 'Foo',
        age: 20
    };

    const object2 = {
        name: 'Bar',
        born: 1996
    };

    const object3 = {
        name: 'Foo',
        age: 20
    };

    const emptyObj = {};

    it('should return same reference when parameters are equal', function () {
        const merged = object.merge(object3);
        const merged2 = emptyObj.merge(object);

        //checking reference
        expect(true).toEqual(merged === object);
        expect(false).toEqual(merged2 === object);

        expect(merged).toEqual(object);
        expect(merged2).toEqual(object);
    });

    it('should return new merged object when parameters are different', function () {
        const merged = object.merge(object2);

        const newMerged = {
            name: 'Bar',
            age: 20,
            born: 1996
        };

        expect(merged).toEqual(newMerged);

        //checking reference
        expect(false).toEqual(newMerged === merged);
    });

    it('should be able to deep merge', function () {
        const state = {
            object: object,
            foo: 'bar'
        };

        const state2 = {
            object: object2
        };

        const state3 = {
            object: object,
            foo: 'bar'
        };

        const mergedState = state.merge({
            ...state3,
            object: state.object.merge(state3.object)
        });

        const mergedState2 = state.merge({
            ...state2,
            object: state.object.merge(state2.object)
        });

        const newMergedState = {
            object: {
                name: 'Bar',
                age: 20,
                born: 1996
            },
            foo: 'bar'
        };

        expect(mergedState).toEqual(state);
        expect(mergedState.object).toEqual(state.object);

        //checking references
        expect(true).toEqual(mergedState === state);
        expect(true).toEqual(mergedState.object === state.object);

        expect(mergedState2).toEqual(newMergedState);
        expect(mergedState2.object).toEqual(newMergedState.object);
    });
});