def maxSubArray(self, nums: List[int]) -> int:
        # base case for 1 element
        if len(nums) == 1:
            return nums[0]
        
        for i in range(0, len(nums)):
            largest = nums[i]
            for j in range(0,len(nums)):
                calculated_sum = sum(nums[i:j:])
                print(calculated_sum)
                if calculated_sum > largest:
                    largest = calculated_sum
        return largest
        