
def main():
    print(contains_duplicate([1,2,3,4,5])) # false
    print(contains_duplicate([1,2,3,3,4])) # true


def contains_duplicate(nums):
    h_table = {}
    for i in range(0, len(nums)):
        if nums[i] not in h_table:
            h_table[nums[i]] = 1
        else:
            return True
    return False

if __name__ == '__main__':
    main()