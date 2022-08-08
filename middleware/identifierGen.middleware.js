const identifierGenerator = (req, res, next) => {

    let firstSecondsPart = `${Date.now()}`;
    let firstSecondsPartArr = firstSecondsPart.split('').slice(10, 13).join('');

    var secondsSecondsPart, secondSecondsPartArr;

    let anotherPartArr = setTimeout(() => {

        secondsSecondsPart = `${Date.now()}`;
        secondSecondsPartArr = secondsSecondsPart.split('').slice(9, 13).join('');
        
        return secondSecondsPartArr;
    }, 50);

    const identifier = `${anotherPartArr}.fs.simplifier.${firstSecondsPartArr}`;
    req.identifier = identifier;

    next();
}

module.exports = identifierGenerator;