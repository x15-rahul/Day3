const phones = [
    {phoneName: 'Samsung', model: 'S23', price: 89000, color: 'Green'},
    {phoneName: 'iPhone', model: 'iPhone 14', price: 122000, color: 'Moon Grey'},
    {phoneName: 'Xiaomi', model: 'Note 10 Pro', price: 24000, color: 'Matt Black'},
    {phoneName: 'Realme', model: 'Narzo 50', price: 16500, color: 'Sports Black'},
    {phoneName: 'itel', model: 's12', price: 11500, color: 'Sporty Khaki'},
    {phoneName: 'Walton', model: 'i40', price: 12000, color: 'Cyan'},
    {phoneName: 'Tecno', model: 'F34', price: 15000, color: 'Gray'}
];

function getCheapestPhone(phones){
    let cheapestPhone = phones[0].price;
    let cheapestPhoneName = phones[0].phoneName;
    for(const phone of phones){
        if(cheapestPhone > phone.price){
            cheapestPhone = phone.price;
            cheapestPhoneName = phone.phoneName;
        } else {
            continue;
        }
    }
    console.log('Phone Name:', cheapestPhoneName, 'Phone Price:', cheapestPhone);
}

getCheapestPhone(phones);
