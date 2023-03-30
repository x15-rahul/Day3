const heights = [132, 143, 134, 141, 131, 142, 150, 137];

function getTallest(heights){
    let tallest = heights[0];
    for(const height of heights){
        if(tallest < height){
            tallest = height;
        } else {
            continue;
        }
    }
    return tallest;
}

const tallest = getTallest(heights);
console.log('tallest is:', tallest);

function getSmallest(height){
    let smallest = heights[0];
    for(const height of heights){
        if(smallest > height){
            smallest = height
        } else {
            continue;
        }
    }
    return smallest;
}

const smallest = getSmallest(heights);
console.log('smallest is', smallest);
