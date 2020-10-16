export interface Gudang {
        

    //experimen
    // editItem(id: string, editImageUrl: string, editBrand: string, editModel: string, editBaseClock: string, editBoostClock: string, editCore: string, editThread: string, editSpeed: string, editUkuran: string, editChipset: string, editProcessor: string, editPrice: string, editStock: string);

    id: string;
    imageUrl: string;
    brand: string;
    model: string;

    type: string;

    // CPU
    baseClock: string;
    boostClock: string;
    core: string;
    thread: string;

    // RAM
    speed: string;
    ukuran: string;

    // Mobo
    chipset: string;
    processor: string;

    price: string;
    stock: string;

}

// export interface CPU {
//     id: string;
//     imageUrl: string;
//     brand: string;
//     model: string;

//     baseClock: string;
//     boostClock: string;
//     core: string;
//     thread: string;

//     price: string;
//     stock: string;
// }

// export interface RAM {
//     id: string;
//     imageUrl: string;
//     brand: string;
//     model: string;

//     speed: string;
//     ukuran: string;

//     price: string;
//     stock: string;
// }

// export interface Mobo {
//     id: string;
//     imageUrl: string;
//     brand: string;
//     model: string;

//     chipset: string;
//     processor: string;

//     price: string;
//     stock: string;
// }

// export interface GPU {
//     id: string;
//     imageUrl: string;
//     brand: string;
//     model: string;

//     price: string;
//     stock: string;
// }
