//src/containers/ClassView/AskQuestion.jsx

// component that contain the algorythm

const color = ['red', 'yellow', 'green'];

const weight = [0.53, 0.28, 0.19];

// get a random number between 0 and 1
let random = (min, max) => {
    return Math.random() * (max - min) + min;
};

var getBiasedColor = function(color, weight) {
    var total_weight = weight.reduce(function (prev, cur, i, arr) {
        return prev + cur;
    });
     
    var random_num = random(0, total_weight);
    var weight_sum = 0;
    //console.log(random_num)
     
    for (var i = 0; i < color.length; i++) {
        weight_sum += weight[i];
        weight_sum = +weight_sum.toFixed(2);
         
        if (random_num <= weight_sum) {
            return color[i];
        }
    }

    // weight_sum = 0 + 0.53; Check if random_num <= 0.53
    // weight_sum = 0.53 + 0.28; Check if random_num <= 0.81
    // weight_sum = 0.81 + 0.19; Check if random_num <= 1

};

var randomPick = getBiasedColor(color, weight);
console.log(randomPick)
