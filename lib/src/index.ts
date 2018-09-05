import { otherFunction, IOtherInterface } from "./someOtherInterface";
interface IBaseInterfaceOptions {
    firstOption: string;
}

function myLibraryFunction(options: IBaseInterfaceOptions & IOtherInterface) {
    otherFunction(options);
    console.log(options.firstOption);
}

export { myLibraryFunction, IBaseInterfaceOptions };
