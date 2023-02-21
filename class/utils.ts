class Utils {
    constructor(){

    }
    public remove_element_in_array(array:any[], element:any):any[]{
        const _arr = array.filter(item => item !== element);
        console.log(_arr,'asdasd')
        return _arr;
    }
}

export default Utils;