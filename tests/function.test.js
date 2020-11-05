
let fun = require("../utlis/function.js");

var searchArr = [{id:"1", name:"Doe", price:46},
            {id:"2", name:"edfgDoe", price:4},
            {id:"3", name:"moon", price:4600}];
 
describe('Testing search return value', () => {     
	test(`Should return [{id:"3", name:"moon", price:4600}] when given "oo" & searchArr`, ()=>{
        let acual = fun.search("oo",searchArr);
        let expected = [{id:"3", name:"moon", price:4600}]
        expect(acual).toMatchObject(expected);
    }) 

    test(`Should return [] when given "adgsfgo" & searchArr`,()=>{
        let acual = fun.search("adgsfgo",searchArr);
        let expected = [];
        expect(acual).toMatchObject(expected);
    })

    test(`Should return [{id:"1", name:"Doe", price:46},  when given "o" & searchArr
                    {id:"2", name:"edfgDoe", price:4},
                    {id:"3", name:"moon", price:4600}] `,()=>{
        let acual = fun.search("o",searchArr);
        let expected = [{id:"1", name:"Doe", price:46},
                        {id:"2", name:"edfgDoe", price:4},
                        {id:"3", name:"moon", price:4600}];
        expect(acual).toMatchObject(expected);
    })

    test(`Should return when given "adgsfgo" & searchArr`,()=>{
        let acual = fun.search("",searchArr);
        let expected = null;
        expect(acual).toBe(expected);
    })
});

describe('Testing addToCartList return value', () => {     
	test(`Should return [{id:"1", name:"Doe", price:46}] when given "1" & searchArr & []`, ()=>{
        let acual = fun.addToCartList("1",searchArr,[]);
        let expected = [{id:"1", name:"Doe", price:46}]
        expect(acual).toMatchObject(expected);
    }) 

    test(`Should return [{id:"2", name:"edfgDoe", price:4}] when given "2" & searchArr & []`, ()=>{
        let acual = fun.addToCartList("2",searchArr,[]);
        let expected = [{id:"2", name:"edfgDoe", price:4}]
        expect(acual).toMatchObject(expected);
    }) 

    test(`Should return [{id:"1", name:"Doe", price:46},{id:"2", name:"edfgDoe", price:4}] when given "2" & searchArr & [{id:"1", name:"Doe", price:46}]`, ()=>{
        let acual = fun.addToCartList("2",searchArr,[{id:"1", name:"Doe", price:46}]);
        let expected = [{id:"1", name:"Doe", price:46},{id:"2", name:"edfgDoe", price:4}]
        expect(acual).toMatchObject(expected);
    }) 
});

describe('Testing addToItemList return value', () => {     
	test(`Should return [{id:"4", name:"Dodsae", price:46d}] when given {id:"4", name:"Dodsae", price:46} & searchArr`, ()=>{
        let acual = fun.addToItemList({id:"4", name:"Dodsae", price:46},searchArr);
        let expected = [{id:"1", name:"Doe", price:46},
        {id:"2", name:"edfgDoe", price:4},
        {id:"3", name:"moon", price:4600},
        {id:"4", name:"Dodsae", price:46}]
        expect(acual).toMatchObject(expected);
    }) 
});