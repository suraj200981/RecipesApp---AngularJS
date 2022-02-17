export class Ingredient {

    //in the constructor we can add public in front of the name to allow for the mdodel to be created like this instead of creating
    // how it is in the recipe model file
    constructor(public name: string, public amount: number) { 

        this.name = name;
        this.amount = amount;

    }
    
}