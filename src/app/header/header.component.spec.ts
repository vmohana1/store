describe('header',()=> {

    let headerTitle = '';
    
    beforeEach(()=> {
        headerTitle = 'My Store';
        
    })

    afterEach(()=> {
        headerTitle = '';
    })

    it('checks header title', 
    ()=>expect('My Store').toBe(headerTitle));

    // it('checks if hellotest is not hellotest', 
    // ()=>expect('hellotest').not.toBe('hellotest5'));

    // it('checks if hellotest starts with hello', 
    // ()=>expect('hellotest').toMatch(expectMatch));
});