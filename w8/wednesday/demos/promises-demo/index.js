// V1 doesn't work
function openingCrawlBroken(time) {
    setTimeout(() => {
        console.log(`It is a period of civil war.
                     Rebel spaceships, striking
                     from a hidden base, have won
                     their first victory against
                     the evil Galactic Empire.`);
    }, time);
    setTimeout(() => {
        console.log(`During the battle, Rebel
                         spies managed to steal secret
                         plans to the Empire's
                         ultimate weapon, the DEATH
                         STAR, an armored space
                         station with enough power to
                         destroy an entire planet.`);
        
    }, time);
    setTimeout(() => {
        console.log(`Pursued by the Empire's
                             sinister agents, Princess
                             Leia races home aboard her
                             starship, custodian of the
                             stolen plans that can save
                             her people and restore
                             freedom to the galaxy....`);
    }, time);
}

// openingCrawlBroken(2000);

// V2 works but unreadable
function openingCrawlNested(time) {
    setTimeout(() => {
        console.log(`It is a period of civil war.
                     Rebel spaceships, striking
                     from a hidden base, have won
                     their first victory against
                     the evil Galactic Empire.`);
        setTimeout(() => {
            console.log(`During the battle, Rebel
                         spies managed to steal secret
                         plans to the Empire's
                         ultimate weapon, the DEATH
                         STAR, an armored space
                         station with enough power to
                         destroy an entire planet.`);
            setTimeout(() => {
                console.log(`Pursued by the Empire's
                             sinister agents, Princess
                             Leia races home aboard her
                             starship, custodian of the
                             stolen plans that can save
                             her people and restore
                             freedom to the galaxy....`);
            }, time);
        }, time);
    }, time);
}

// openingCrawlNested(2000);
// Wraps setTimeout with a Promise

function sum(n1, n2) {
    return n1 + n2;
}
function wait(ms) {
    return new Promise((resolve, reject) => {
        if (ms < 2000) {
            return reject('Ms less than 2000');
        }
        setTimeout(() => {
            ms -= 1000;
            console.log('inside setTimeout');
            resolve({sum, ms});
        }, ms);
    });
}

// V3 with promise chaining
function openingCrawlChain(time) {
    return wait(time)
        .then((obj) => {
            console.log(`It is a period of civil war.
                     Rebel spaceships, striking
                     from a hidden base, have won
                     their first victory against
                     the evil Galactic Empire.`);
            console.log(obj.sum(obj.ms, obj.ms));
            // return wait(time);
            return 5
        })
        .then((prevVal) => {
            console.log(prevVal);
            console.log(`During the battle, Rebel
                         spies managed to steal secret
                         plans to the Empire's
                         ultimate weapon, the DEATH
                         STAR, an armored space
                         station with enough power to
                         destroy an entire planet.`)
            return wait(time);
        })
        .then(() => {
            console.log(`Pursued by the Empire's
                             sinister agents, Princess
                             Leia races home aboard her
                             starship, custodian of the
                             stolen plans that can save
                             her people and restore
                             freedom to the galaxy....`);
            return 42;
        })
        .catch((message) => console.log(message));
}

// openingCrawlChain(2000).then(result => console.log(result));



// V4 with async and await
async function openingCrawlAsync(time) {
    try {
        const msObj = await wait(time);
        console.log(`It is a period of civil war.
                    Rebel spaceships, striking
                    from a hidden base, have won
                    their first victory against
                    the evil Galactic Empire.`);
        const msObj2 = await wait(msObj.ms);
        console.log(`During the battle, Rebel
                        spies managed to steal secret
                        plans to the Empire's
                        ultimate weapon, the DEATH
                        STAR, an armored space
                        station with enough power to
                        destroy an entire planet.`)
        await wait(time);
        console.log(`Pursued by the Empire's
                            sinister agents, Princess
                            Leia races home aboard her
                            starship, custodian of the
                            stolen plans that can save
                            her people and restore
                            freedom to the galaxy....`);
    } catch (message) {
        console.log(message);
    }
}

openingCrawlAsync(2000);