/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    let Table = {};
    
    for (let i = 0; i < nums.length; i++) {
        
        if (Table[nums[i]] == undefined) {
            
            Table[nums[i]] = 1;
        }
        else {
            return true;
        }
        
    }
    return false;
};

// a linear solution is much faster than nested loop which usually leads o(n^2),
