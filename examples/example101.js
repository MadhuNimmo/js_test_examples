var f0 = "Hello";

function f1(p0) {
    return p0;
}

function f2(p1) {
    return p1(f0); //7
}

function f3(p2) {
    return p2(f1); //6
}

function f4(p3) {
    return p3(f2); //5
}

function f5(p4) {
    return p4(f3); //4 
}

function f6(p5) {
    return p5(f4); //3
}

function f7(p6) {
    return p6(f5); //2
}

f7(f6); //1

function g1() {
    return "Jelly";
}

function g2() {
    return g1;
}

function g3() {
    return g2;
}

function g4() {
    return g3;
}

function g5() {
    return g4;
}

function g6() {
    return g5;
}

function g7() {
    return g6;
}

g7()()()()()()(); //1 //2 //3 //4 //5 //6 //7

var h0 = "World";

function h1(p0) {
    return p0;
}

function h2(p1) {
    return p1;
}

function h3(p2) {
    return p2;
}

function h4(p3) {
    return p3;
}

function h5(p4) {
    return p4;
}

function h6(p5) {
    return p5;
}

function h7(p6) {
    return p6;
}

h7(h6)(h5)(h4)(h3)(h2)(h1)(h0); //1 //2 //3 //4 //5 //6 //7