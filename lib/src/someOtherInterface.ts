import { IBaseInterfaceOptions } from ".";

interface IOtherInterface {
    secondOption?: string;
}

function otherFunction(options: IBaseInterfaceOptions) {
    console.log(options.firstOption);
}

export { otherFunction, IOtherInterface };
