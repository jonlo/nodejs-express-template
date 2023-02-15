const { controller } = require('../server/controllers/controller');

// Cars tests
// describe('Car addition', () => {

//     it('Correct car data added', async () => {
//         const cars = new Cars();
//         let carData = { id: 0, seats: 4 };
//         cars.add(carData);
//         carData = { id: 1, seats: 5 };
//         cars.add(carData);
//         expect(Object.values(cars.get()).length).toEqual(2);
//     });

//     it('should throw Error when no id parameter was passed', async () => {
//         const cars = new Cars();
//         const carData = { seats: 4 };
//         expect(() => { cars.add(carData) }).toThrow(TypeError);
//     });

// });