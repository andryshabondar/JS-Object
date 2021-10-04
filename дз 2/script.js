let MyMath ={
    a: 5,
    b: 2,
    sum(){
        console.log(MyMath.a + MyMath.b);
    },
    multiplication(){
        console.log(MyMath.a * MyMath.b);
    },
    division(){
        console.log(MyMath.a / MyMath.b);
    },
    subtraction(){
        console.log(MyMath.a - MyMath.b);
    },
}

MyMath.sum();
MyMath.multiplication();
MyMath.division();
MyMath.subtraction();


// Написати розв’язок нижче описаного завдання, кожне завдання окремий рядок коду:
// — Створіть порожній об'єкт MyMath.
// — Cтворіть властивість a зі значенням 5.
// — Cтворіть властивість b зі значенням 2.
// — Створіть 4 методи які будуть робити наступне:
// sum – обчислює суму a+b та повертає значення console.log().
// multiplication – обчислює множення a*b та повертає значення console.log().
// division – обчислює ділення a/b та повертає значення console.log().
// subtraction – обчислює віднімання a-b та повертає значення console.log().
// — Запустіть кожен з цих методів, результат має бути наступним:
// MyMath.sum() – має повернути 5 + 2 = 7
// MyMath.multiplication() – має повернути 5 * 2 = 10
// MyMath.division() – має повернути 5 / 2 = 2.5
// MyMath.subtraction() – має повернути 5 - 2 = 3
