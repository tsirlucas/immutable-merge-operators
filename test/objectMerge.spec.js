describe('Object merge operator', function () {
    const object = {
        name: 'Foo',
        age: 20
    };

    const object2 = {
        name: 'Bar',
    };

    const object3 = {
        name: 'Foo',
        age: 20
    };

    it('should return same reference when parameters are equal', function () {
        const merged = object.merge(object3);
        expect(merged).toEqual(object);
    });

    it('should return new merged object when parameters are different', function () {
        const merged = object.merge(object2);

        const newMerged = {
            name: 'Bar',
            age: 20
        };

        expect(merged).toEqual(newMerged);
    });
});