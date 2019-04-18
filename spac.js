describe('Enter name feature', function()
{

    it('should search in google', function(){

        browser.get('https://angularjs.org/');
        element(by.model('yourName')).sendKeys('Roshan');
        var txt = element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
        expect(txt.getText()).toEqual('Hello Roshan!');


    });
});