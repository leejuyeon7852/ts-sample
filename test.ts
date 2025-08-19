function testOptionalParam(base: string, optionalParam?: string) {
    console.log('base: ', base);
    console.log('optionalParam: ', optionalParam);
}

testOptionalParam("base");
testOptionalParam("base", "optional");

    