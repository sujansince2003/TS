
interface cityType {
    area: number,
    readonly cityName: string
}


const city: cityType = {
    area: 100,
    cityName: "Pokhara"
}

city.area = 130
// city.cityName = "ktm"  cannot change as it is readonly


interface districtType {
    area: number,
    distName: string
}

const mydistrict: districtType = {
    distName: "pokhara",
    area: 100
}

mydistrict.distName = "ktm"
mydistrict.area = 130

//now lets say i want to make districType for one data then we can use Readonly<interfacename>

const friendDistrict: Readonly<districtType> =
{
    distName: "pokhara",
    area: 100
}

// friendDistrict.distName = "ktm"  cannot change both as it is optional
// friendDistrict.area = 130