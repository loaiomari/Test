let cars=["toyota","BMW","mercedes","VW","BYD","porsh"]

// POP Method:حذف آخر عنصر من الأريه

console.log("POP Method: ", cars.pop());
console.log(cars)

// Push Method:اضافة عنصر الى آخر الأريه
console.log("Push Method: ",cars.push("Hunda"))
console.log(cars)

//Shift Method:حذف أول عنصر ومن ثم إزاحة باقي العناصر الى مكان العنصر الاول 
console.log("Shift Method: ",cars.shift())
console.log(cars)

//Unshift Method:إضافة عنصر الى بداية الأريه
console.log("Unshift Method: ",cars.unshift("Opel"))
console.log(cars)

//At Method:بجيب العنصر اللي بنأشر عليه باستخدام رقم الانديكس
console.log("At Method: ",cars.at(4))

//Length Method:  بتعطيني كم طول الاريه ابتداء بالرقم ١ و ليس صفر
console.log("Length method: ",cars.length)