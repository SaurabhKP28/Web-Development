 const problems = [
    {
      id: 1,
      title: "Concatenation of Array",
      difficulty: "easy",
      category: "Array",
      link: "https://leetcode.com/problems/concatenation-of-array/",
      description: "Concatenate an array with itself."
    },
    {
      id: 2, 
      title: "Shuffle the Array",
      difficulty: "easy",
      category: "Array",
      link: "https://leetcode.com/problems/shuffle-the-array/",
      description: "Shuffle an array by swapping elements based on the given indices."
    },
    {
      id: 3,
      title: "Kids With the Greatest Number of Candies",
      difficulty: "easy",
      category: "Array",
      link: "https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/",
      description: "Determine which kids have the greatest number of candies after some extra candies are distributed."
    },
    {
      id: 4,
      title: "Number of Good Pairs",
      difficulty: "easy",
      category: "Array",
      link: "https://leetcode.com/problems/number-of-good-pairs/",
      description: "Count the number of good pairs in an array, where a good pair is one where the numbers are equal and the indices are different."
    },
    {
      id: 5,
      title: "How Many Numbers Are Smaller Than the Current Number",
      difficulty: "easy",
      category: "Array",
      link: "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/",
      description: "For each number in the array, count how many numbers are smaller than it."
    },
    {
      id: 6,
      title: "Maximum and Minimum Element in an Array",
      difficulty: "easy",
      category: "Array",
      link: "https://leetcode.com/problems/maximum-and-minimum-element-in-an-array/",
      description: "Find the maximum and minimum elements in an array."
    },
    {
      id: 7,
      title: "Reverse the Array",
      difficulty: "easy",
      category: "Array",
      link: "https://leetcode.com/problems/reverse-the-array/",
      description: "Reverse the elements of the array in place."
    },
    {
      id: 8,
      title: "Contains Duplicate",
      difficulty: "easy",
      category: "Array",
      link: "https://leetcode.com/problems/contains-duplicate/",
      description: "Check if an array contains any duplicates."
    },
    {
      id: 9,
      title: "Row with Max 1's",
      difficulty: "easy",
      category: "Array",
      link: "https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1",
      description: "Find the row with the maximum number of 1's in a binary matrix."
    },
    {
      id: 10,
      title: "Build Array from Permutation",
      difficulty: "easy",
      category: "Array",
      link: "https://leetcode.com/problems/build-array-from-permutation/",
      description: "Create a new array based on the given permutation of indices."
    },
    {
      id: 11,
      title: "Add to Array Form of Integer",
      difficulty: "easy",
      category: "Array",
      link: "https://leetcode.com/problems/add-to-array-form-of-integer/",
      description: "Add a number to an array that represents a large integer."
    },
    {
      id: 12,
      title: "Count Inversions",
      difficulty: "medium",
      category: "Array",
      link: "https://www.codingninjas.com/codestudio/problems/count-inversions_615",
      description: "Count the number of inversions in an array, where an inversion is when a larger number precedes a smaller one."
    },
    {
      id: 13,
      title: "Transpose Matrix",
      difficulty: "medium",
      category: "Array",
      link: "https://leetcode.com/problems/transpose-matrix/",
      description: "Transpose the given matrix, i.e., convert rows to columns."
    },
    {
      id: 14,
      title: "Find the Duplicate Number",
      difficulty: "easy",
      category: "Array",
      link: "https://leetcode.com/problems/find-the-duplicate-number/",
      description: "Find the duplicate number in an array where each number appears at least once."
    },
    {
      id: 15,
      title: "Merge Sorted Array",
      difficulty: "easy",
      category: "Array",
      link: "https://leetcode.com/problems/merge-sorted-array/",
      description: "Merge two sorted arrays into one sorted array."
    },
    {
      id: 16,
      title: "Maximum Subarray",
      difficulty: "easy",
      category: "Array",
      link: "https://leetcode.com/problems/maximum-subarray/",
      description: "Find the contiguous subarray that has the largest sum."
    },
    {
      id: 17,
      title: "Chocolate Distribution Problem",
      difficulty: "medium",
      category: "Array",
      link: "https://www.geeksforgeeks.org/chocolate-distribution-problem/",
      description: "Distribute chocolates among students so that the difference between the maximum and minimum chocolates is minimized."
    },
    {
      id: 18,
      title: "Search in Rotated Sorted Array",
      difficulty: "medium",
      category: "Array",
      link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      description: "Search for an element in a rotated sorted array."
    },
    {
      id: 19,
      title: "Best Time to Buy and Sell Stock",
      difficulty: "easy",
      category: "Array",
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      description: "Find the maximum profit you can make by buying and selling stocks."
    },
    {
      id: 20,
      title: "Repeat and Missing Number Array",
      difficulty: "easy",
      category: "Array",
      link: "https://leetcode.com/problems/repeat-and-missing-number-array/",
      description: "Find the missing and repeating number in an array."
    },

    {
      id: 21,
      title: "Reverse the Array",
      difficulty: "easy",
      category: "Array",
      link: "https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/",
      description: "Write a program to reverse the elements of an array."
    },
    {
      id: 22,
      title: "Find Maximum and Minimum Element in an Array",
      difficulty: "easy",
      category: "Array",
      link: "https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/",
      description: "Determine the maximum and minimum elements in a given array."
    },
    {
      id: 23,
      title: "Find the 'Kth' Max and Min Element of an Array",
      difficulty: "medium",
      category: "Array",
      link: "https://practice.geeksforgeeks.org/problems/kth-smallest-element/0",
      description: "Find the Kth largest and smallest elements in an array."
    },
    {
      id: 24,
      title: "Sort Array of 0s, 1s, and 2s Without Sorting Algorithm",
      difficulty: "easy",
      category: "Array",
      link: "https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s/0",
      description: "Sort an array consisting only of 0s, 1s, and 2s without using sorting algorithms."
    },
    {
      id: 25,
      title: "Move All Negative Elements to One Side",
      difficulty: "easy",
      category: "Array",
      link: "https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/",
      description: "Rearrange the array such that negative elements are on one side."
    },
    {
      id: 26,
      title: "Union and Intersection of Two Sorted Arrays",
      difficulty: "medium",
      category: "Array",
      link: "https://practice.geeksforgeeks.org/problems/union-of-two-arrays/0",
      description: "Find the union and intersection of two sorted arrays."
    },
    {
      id: 27,
      title: "Cyclically Rotate an Array by One",
      difficulty: "easy",
      category: "Array",
      link: "https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one/0",
      description: "Rotate the elements of an array by one position cyclically."
    },
    {
      id: 28,
      title: "Largest Sum Contiguous Subarray",
      difficulty: "medium",
      category: "Array",
      link: "https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0",
      description: "Find the contiguous subarray with the largest sum."
    },
    {
      id: 29,
      title: "Minimise the Maximum Difference Between Heights",
      difficulty: "hard",
      category: "Array",
      link: "https://practice.geeksforgeeks.org/problems/minimize-the-heights3351/1",
      description: "Minimise the difference between the heights after certain operations."
    },
    {
      id: 30,
      title: "Minimum Number of Jumps to Reach End",
      difficulty: "medium",
      category: "Array",
      link: "https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps/0",
      description: "Find the minimum number of jumps required to reach the end of the array."
    },

    // Matrix
    {
      id: 1,
      title: "Spiral Traversal on a Matrix",
      difficulty: "medium",
      category: "Matrix",
      link: "https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix/0",
      description: "Perform spiral traversal on a matrix."
    },
    {
      id: 2,
      title: "Search an Element in a Matrix",
      difficulty: "medium",
      category: "Matrix",
      link: "https://leetcode.com/problems/search-a-2d-matrix/",
      description: "Search for a specific element in a 2D matrix."
    },
    {
      id: 3,
      title: "Find Median in a Row-Wise Sorted Matrix",
      difficulty: "hard",
      category: "Matrix",
      link: "https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1",
      description: "Find the median of a row-wise sorted matrix."
    },
    {
      id: 4,
      title: "Find Row with Maximum Number of 1's",
      difficulty: "medium",
      category: "Matrix",
      link: "https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1",
      description: "Identify the row with the maximum number of 1's."
    },
    {
      id: 5,
      title: "Print Elements in Sorted Order Using Row-Column Wise Sorted Matrix",
      difficulty: "medium",
      category: "Matrix",
      link: "https://practice.geeksforgeeks.org/problems/sorted-matrix/0",
      description: "Print elements in sorted order using a row-column wise sorted matrix."
    },
    {
      id: 6,
      title: "Maximum Size Rectangle",
      difficulty: "hard",
      category: "Matrix",
      link: "https://practice.geeksforgeeks.org/problems/max-rectangle/1",
      description: "Find the maximum size rectangle with all 1's in a binary matrix."
    },
    {
      id: 7,
      title: "Find a Specific Pair in Matrix",
      difficulty: "hard",
      category: "Matrix",
      link: "https://www.geeksforgeeks.org/find-a-specific-pair-in-matrix/",
      description: "Find a specific pair in a matrix with a given condition."
    },
    {
      id: 8,
      title: "Rotate Matrix by 90 Degrees",
      difficulty: "medium",
      category: "Matrix",
      link: "https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/",
      description: "Rotate the matrix by 90 degrees clockwise without extra space."
    },
    {
      id: 9,
      title: "Kth Smallest Element in a Row-Column Wise Sorted Matrix",
      difficulty: "medium",
      category: "Matrix",
      link: "https://practice.geeksforgeeks.org/problems/kth-element-in-matrix/1",
      description: "Find the Kth smallest element in a row-column wise sorted matrix."
    },
    {
      id: 10,
      title: "Common Elements in All Rows of a Given Matrix",
      difficulty: "medium",
      category: "Matrix",
      link: "https://www.geeksforgeeks.org/common-elements-in-all-rows-of-a-given-matrix/",
      description: "Find common elements in all rows of a given matrix."
    },
    // String 
    {
          id: 1,
          title: "Reverse Words in a String",
          difficulty: "medium",
          category: "String",
          link: "https://leetcode.com/problems/reverse-words-in-a-string/",
          description: "Reverse the order of words in a given string, while preserving spaces."
        },
        {
          id: 2,
          title: "Check if the Sentence is Pangram",
          difficulty: "easy",
          category: "String",
          link: "https://leetcode.com/problems/check-if-the-sentence-is-pangram",
          description: "Determine if a given sentence contains every letter of the alphabet at least once."
        },
        {
          id: 3,
          title: "Maximum Number of Words Found in Sentences",
          difficulty: "easy",
          category: "String",
          link: "https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/",
          description: "Find the sentence with the maximum number of words from a given list of sentences."
        },
        {
          id: 4,
          title: "Valid Palindrome",
          difficulty: "easy",
          category: "String",
          link: "https://leetcode.com/problems/valid-palindrome/",
          description: "Check if a string is a palindrome, considering only alphanumeric characters and ignoring case."
        },
        {
          id: 5,
          title: "Count the Number of Consistent Strings",
          difficulty: "easy",
          category: "String",
          link: "https://leetcode.com/problems/count-the-number-of-consistent-strings/",
          description: "Count the number of consistent strings that can be formed from a given list of words and a set of allowed characters."
        },
        
        {
          id: 6,
          title: "Valid Parentheses",
          difficulty: "medium",
          category: "String",
          link: "https://leetcode.com/problems/valid-parentheses/",
          description: "Check if the parentheses in the string are valid, using a stack for matching pairs."
        },
        { 
          id: 8,
          title: "Reverse a String",
          difficulty: "easy",
          category: "String",
          link: "https://leetcode.com/problems/reverse-string/",
          description: "Reverse the given string in place."
        },
        {
          id: 9,
          title: "Check Whether a String is Palindrome",
          difficulty: "easy",
          category: "String",
          link: "https://practice.geeksforgeeks.org/problems/palindrome-string0817/1",
          description: "Check whether the given string is a palindrome."
        },
        {
          id: 10,
          title: "Find Duplicate Characters in a String",
          difficulty: "medium",
          category: "String",
          link: "https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/",
          description: "Identify all duplicate characters in the input string."
        },
        {
          id: 11,
          title: "Why Strings are Immutable in Java",
          difficulty: "conceptual",
          category: "String",
          link: "<->",
          description: "Explore the reasons for immutability of strings in Java."
        },
        {
          id: 12,
          title: "Check String Rotation",
          difficulty: "medium",
          category: "String",
          link: "https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other/",
          description: "Check if one string is a rotation of another."
        },
        {
          id: 13,
          title: "Valid Shuffle of Two Strings",
          difficulty: "medium",
          category: "String",
          link: "https://www.programiz.com/java-programming/examples/check-valid-shuffle-of-strings",
          description: "Check if a string is a valid shuffle of two other strings."
        },
        {
          id: 14,
          title: "Count and Say Problem",
          difficulty: "medium",
          category: "String",
          link: "https://leetcode.com/problems/count-and-say/",
          description: "Generate the 'count and say' sequence for a given number."
        },
        {
          id: 15,
          title: "Longest Palindromic Substring",
          difficulty: "hard",
          category: "String",
          link: "https://practice.geeksforgeeks.org/problems/longest-palindrome-in-a-string/0",
          description: "Find the longest palindromic substring in a given string."
        },
        {
          id: 16,
          title: "Longest Recurring Subsequence",
          difficulty: "hard",
          category: "String",
          link: "https://practice.geeksforgeeks.org/problems/longest-repeating-subsequence/0",
          description: "Find the longest recurring subsequence in a string."
        },
        {
          id: 17,
          title: "Print All Subsequences of a String",
          difficulty: "medium",
          category: "String",
          link: "https://www.geeksforgeeks.org/print-subsequences-string/",
          description: "Generate and print all subsequences of a given string."
        },
        {
          id: 18,
          title: "Print All Permutations of a String",
          difficulty: "medium",
          category: "String",
          link: "https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string/0",
          description: "Generate all permutations of a given string."
        },
        {
          id: 19,
          title: "Split Binary String into Equal 0's and 1's",
          difficulty: "medium",
          category: "String",
          link: "https://www.geeksforgeeks.org/split-the-binary-string-into-substrings-with-equal-number-of-0s-and-1s/",
          description: "Split a binary string into substrings with equal numbers of 0's and 1's."
        },
        {
          id: 11,
          title: "Valid Anagram",
          difficulty: "easy",
          category: "String",
          link: "https://leetcode.com/problems/valid-anagram/",
          description: "Check if two strings are anagrams of each other."
        },
    // Searching & Sorting  
    {
      id: 1,
      title: "Find first and last positions of an element in a sorted array",
      difficulty: "medium",
      category: "Searching & Sorting",
      link: "https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x/0",
      description: "Find the first and last occurrences of an element in a sorted array."
  },
  {
      id: 2,
      title: "Find a Fixed Point (Value equal to index) in a given array",
      difficulty: "medium",
      category: "Searching & Sorting",
      link: "https://practice.geeksforgeeks.org/problems/value-equal-to-index-value1330/1",
      description: "Find a fixed point in a given array where the element is equal to its index."
  },
  {
      id: 3,
      title: "Search in a rotated sorted array",
      difficulty: "medium",
      category: "Searching & Sorting",
      link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      description: "Search for an element in a rotated sorted array."
  },
  {
      id: 4,
      title: "Square root of an integer",
      difficulty: "easy",
      category: "Searching & Sorting",
      link: "https://practice.geeksforgeeks.org/problems/square-root/1",
      description: "Find the square root of an integer without using the sqrt function."
  },
  {
      id: 5,
      title: "Maximum and minimum of an array using minimum number of comparisons",
      difficulty: "medium",
      category: "Searching & Sorting",
      link: "https://practice.geeksforgeeks.org/problems/middle-of-three2926/1",
      description: "Find the maximum and minimum elements of an array with minimum comparisons."
  },
  {
      id: 6,
      title: "Optimum location of point to minimize total distance",
      difficulty: "hard",
      category: "Searching & Sorting",
      link: "https://www.geeksforgeeks.org/optimum-location-point-minimize-total-distance/",
      description: "Find the optimum location of a point to minimize the total distance to other points."
  },
  {
      id: 7,
      title: "Find the repeating and the missing",
      difficulty: "medium",
      category: "Searching & Sorting",
      link: "https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1",
      description: "Find the repeating and missing numbers in an array."
  },
  {
      id: 8,
      title: "Find majority element",
      difficulty: "medium",
      category: "Searching & Sorting",
      link: "https://practice.geeksforgeeks.org/problems/majority-element/0",
      description: "Find the majority element in an array (element that appears more than half the times)."
  },
  {
      id: 9,
      title: "Searching in an array where adjacent differ by at most k",
      difficulty: "medium",
      category: "Searching & Sorting",
      link: "https://practice.geeksforgeeks.org/problems/searching-in-an-array-where-adjacent-differ-by-at-most-k0456/1",
      description: "Search for an element in an array where adjacent elements differ by at most k."
  },
  {
      id: 10,
      title: "Find a pair with a given difference",
      difficulty: "medium",
      category: "Searching & Sorting",
      link: "https://practice.geeksforgeeks.org/problems/find-pair-given-difference/0",
      description: "Find a pair in an array whose difference is equal to a given value."
  },
  {
      id: 11,
      title: "Find four elements that sum to a given value",
      difficulty: "hard",
      category: "Searching & Sorting",
      link: "https://practice.geeksforgeeks.org/problems/find-all-four-sum-numbers/0",
      description: "Find four elements in an array whose sum is equal to a given value."
  },
  {
      id: 12,
      title: "Maximum sum such that no 2 elements are adjacent",
      difficulty: "medium",
      category: "Searching & Sorting",
      link: "https://practice.geeksforgeeks.org/problems/stickler-theif/0",
      description: "Find the maximum sum such that no two adjacent elements are selected."
  },
  {
      id: 13,
      title: "Count triplet with sum smaller than a given value",
      difficulty: "medium",
      category: "Searching & Sorting",
      link: "https://practice.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1",
      description: "Count the number of triplets in an array whose sum is smaller than a given value."
  },
  {
      id: 14,
      title: "Merge 2 sorted arrays",
      difficulty: "medium",
      category: "Searching & Sorting",
      link: "https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1",
      description: "Merge two sorted arrays into one sorted array."
  },
  {
      id: 15,
      title: "Print all subarrays with 0 sum",
      difficulty: "medium",
      category: "Searching & Sorting",
      link: "https://practice.geeksforgeeks.org/problems/zero-sum-subarrays/0",
      description: "Print all subarrays in an array whose sum is 0."
  },
  {
      id: 16,
      title: "Product array Puzzle",
      difficulty: "medium",
      category: "Searching & Sorting",
      link: "https://practice.geeksforgeeks.org/problems/product-array-puzzle/0",
      description: "Find the product of all elements in an array except the current element for each index."
  },
  {
      id: 17,
      title: "Sort array according to count of set bits",
      difficulty: "medium",
      category: "Searching & Sorting",
      link: "https://practice.geeksforgeeks.org/problems/sort-by-set-bit-count/0",
      description: "Sort an array based on the number of set bits (1s) in the binary representation of each element."
  },
  {
      id: 18,
      title: "Minimum no. of swaps required to sort the array",
      difficulty: "hard",
      category: "Searching & Sorting",
      link: "https://practice.geeksforgeeks.org/problems/minimum-swaps/1",
      description: "Find the minimum number of swaps required to sort an array."
  },
  {
      id: 19,
      title: "Bishu and Soldiers",
      difficulty: "medium",
      category: "Searching & Sorting",
      link: "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/bishu-and-soldiers/",
      description: "In a game, find the total number of soldiers Bishu can defeat given a certain range."
  },
  {
      id: 20,
      title: "Rasta and Kheshtak",
      difficulty: "hard",
      category: "Searching & Sorting",
      link: "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/rasta-and-kheshtak/",
      description: "Solve the problem by finding an efficient way to approach the search."
  },
  

    // Binary Search
    
    {
      id: 1,
      title: "Binary Search",
      difficulty: "easy",
      category: "Binary Search",
      link: "https://leetcode.com/problems/binary-search/",
      description: "Implement binary search to find the target value in a sorted array."
  },
  {
      id: 2,
      title: "Find Peak Element",
      difficulty: "medium",
      category: "Binary Search",
      link: "https://leetcode.com/problems/find-peak-element/",
      description: "Find a peak element in an array where an element is considered a peak if it's greater than its neighbors."
  },
  {
      id: 3,
      title: "Find First and Last Position of Element in Sorted Array",
      difficulty: "medium",
      category: "Binary Search",
      link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
      description: "Find the first and last position of a target element in a sorted array."
  },
  {
      id: 4,
      title: "Chocolate Distribution Problem",
      difficulty: "medium",
      category: "Binary Search",
      link: "https://www.geeksforgeeks.org/chocolate-distribution-problem/",
      description: "Distribute chocolates to students such that the difference between the maximum and minimum number of chocolates given is minimized."
  },
  {
      id: 5,
      title: "Search in Rotated Sorted Array",
      difficulty: "medium",
      category: "Binary Search",
      link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      description: "Search for a target element in a rotated sorted array."
  },
  
    // Map & Sets
    {
        id: 1,
        title: "Two Sum",
        difficulty: "easy",
        category: "map & sets",
        link: "https://leetcode.com/problems/two-sum/",
        description: "Find two numbers in the array that add up to a specific target."
      },
      {
        id: 2,
        title: "Jewels and Stones",
        difficulty: "easy",
        category: "map & sets",
        link: "https://leetcode.com/problems/jewels-and-stones/",
        description: "Determine how many characters in the string `stones` are also in the string `jewels`."
      },
      {
        id: 3,
        title: "Find Lucky Integer in an Array",
        difficulty: "easy",
        category: "map & sets",
        link: "https://leetcode.com/problems/find-lucky-integer-in-an-array/",
        description: "Find the lucky integer in an array, where the lucky integer is a number that appears exactly `n` times in the array."
      },

    // Binary Trees 
      {
          id: 1,
          title: "Level order traversal",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://practice.geeksforgeeks.org/problems/level-order-traversal/1",
          description: "Perform a level order traversal of a binary tree."
      },
      {
          id: 2,
          title: "Reverse Level Order traversal",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://practice.geeksforgeeks.org/problems/reverse-level-order-traversal/1",
          description: "Perform a reverse level order traversal of a binary tree."
      },
      {
          id: 3,
          title: "Height of a tree",
          difficulty: "easy",
          category: "Binary Tree",
          link: "https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1",
          description: "Find the height of a binary tree."
      },
      {
          id: 4,
          title: "Diameter of a tree",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1",
          description: "Find the diameter of a binary tree."
      },
      {
          id: 5,
          title: "Mirror of a tree",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://www.geeksforgeeks.org/create-a-mirror-tree-from-the-given-binary-tree/",
          description: "Create a mirror of a given binary tree."
      },
      {
          id: 6,
          title: "Inorder Traversal of a tree both using recursion and Iteration",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://www.techiedelight.com/inorder-tree-traversal-iterative-recursive/",
          description: "Perform inorder traversal using both recursion and iteration."
      },
      {
          id: 7,
          title: "Preorder Traversal of a tree both using recursion and Iteration",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://www.techiedelight.com/preorder-tree-traversal-iterative-recursive/",
          description: "Perform preorder traversal using both recursion and iteration."
      },
      {
          id: 8,
          title: "Postorder Traversal of a tree both using recursion and Iteration",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://www.techiedelight.com/postorder-tree-traversal-iterative-recursive/",
          description: "Perform postorder traversal using both recursion and iteration."
      },
      {
          id: 9,
          title: "Left View of a tree",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1",
          description: "Find the left view of a binary tree."
      },
      {
          id: 10,
          title: "Right View of Tree",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://practice.geeksforgeeks.org/problems/right-view-of-binary-tree/1",
          description: "Find the right view of a binary tree."
      },
      {
          id: 11,
          title: "Top View of a tree",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1",
          description: "Find the top view of a binary tree."
      },
      {
          id: 12,
          title: "Bottom View of a tree",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1",
          description: "Find the bottom view of a binary tree."
      },
      {
          id: 13,
          title: "Zig-Zag traversal of a binary tree",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://practice.geeksforgeeks.org/problems/zigzag-tree-traversal/1",
          description: "Perform zig-zag traversal of a binary tree."
      },
      {
          id: 14,
          title: "Check if a tree is balanced or not",
          difficulty: "easy",
          category: "Binary Tree",
          link: "https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1",
          description: "Check whether a binary tree is balanced or not."
      },
      {
          id: 15,
          title: "Diagonal Traversal of a Binary tree",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://www.geeksforgeeks.org/diagonal-traversal-of-binary-tree/",
          description: "Perform diagonal traversal of a binary tree."
      },
      {
          id: 16,
          title: "Boundary traversal of a Binary tree",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://practice.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1",
          description: "Perform boundary traversal of a binary tree."
      },
      {
          id: 17,
          title: "Construct Binary Tree from String with Bracket Representation",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-string-with-bracket-representation/1",
          description: "Construct a binary tree from a string representation with brackets."
      },
      {
          id: 18,
          title: "Convert Binary tree into Doubly Linked List",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://practice.geeksforgeeks.org/problems/binary-tree-to-dll/1",
          description: "Convert a binary tree into a doubly linked list."
      },
      {
          id: 19,
          title: "Convert Binary tree into Sum tree",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://practice.geeksforgeeks.org/problems/transform-to-sum-tree/1",
          description: "Convert a binary tree into a sum tree."
      },
      {
          id: 20,
          title: "Construct Binary tree from Inorder and preorder traversal",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://practice.geeksforgeeks.org/problems/construct-tree-1/1",
          description: "Construct a binary tree from inorder and preorder traversal."
      },
      {
          id: 21,
          title: "Find minimum swaps required to convert a Binary tree into BST",
          difficulty: "hard",
          category: "Binary Tree",
          link: "https://www.geeksforgeeks.org/minimum-swap-required-convert-binary-tree-binary-search-tree/",
          description: "Find the minimum swaps required to convert a binary tree into a binary search tree."
      },
      {
          id: 22,
          title: "Check if Binary tree is Sum tree or not",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://practice.geeksforgeeks.org/problems/sum-tree/1",
          description: "Check if a binary tree is a sum tree."
      },
      {
          id: 23,
          title: "Check if all leaf nodes are at same level or not",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://practice.geeksforgeeks.org/problems/leaf-at-same-level/1",
          description: "Check if all leaf nodes of a binary tree are at the same level."
      },
      {
          id: 24,
          title: "Check if a Binary Tree contains duplicate subtrees of size 2 or more",
          difficulty: "hard",
          category: "Binary Tree",
          link: "https://practice.geeksforgeeks.org/problems/duplicate-subtree-in-binary-tree/1",
          description: "Check if a binary tree contains duplicate subtrees of size 2 or more."
      },
      {
          id: 25,
          title: "Check if 2 trees are mirror or not",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://practice.geeksforgeeks.org/problems/check-mirror-in-n-ary-tree/0",
          description: "Check if two binary trees are mirror images of each other."
      },
      {
          id: 26,
          title: "Sum of Nodes on the Longest path from root to leaf node",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://practice.geeksforgeeks.org/problems/sum-of-the-longest-bloodline-of-a-tree/1",
          description: "Find the sum of nodes on the longest path from the root to the leaf node."
      },
      {
          id: 27,
          title: "Check if given graph is tree or not",
          difficulty: "hard",
          category: "Graph",
          link: "https://www.geeksforgeeks.org/check-given-graph-tree/",
          description: "Check if a given graph is a tree."
      },
      {
          id: 28,
          title: "Find Largest subtree sum in a tree",
          difficulty: "hard",
          category: "Binary Tree",
          link: "https://www.geeksforgeeks.org/find-largest-subtree-sum-tree/",
          description: "Find the largest subtree sum in a binary tree."
      },
      {
          id: 29,
          title: "Maximum Sum of nodes in Binary tree such that no two are adjacent",
          difficulty: "hard",
          category: "Binary Tree",
          link: "https://www.geeksforgeeks.org/maximum-sum-nodes-binary-tree-no-two-adjacent/",
          description: "Find the maximum sum of nodes in a binary tree such that no two nodes are adjacent."
      },
      {
          id: 30,
          title: "Print all \"K\" Sum paths in a Binary tree",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://www.geeksforgeeks.org/print-k-sum-paths-binary-tree/",
          description: "Print all K sum paths in a binary tree."
      },
      {
          id: 31,
          title: "Find LCA in a Binary tree",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1",
          description: "Find the lowest common ancestor (LCA) of two nodes in a binary tree."
      },
      {
          id: 32,
          title: "Find distance between 2 nodes in a Binary tree",
          difficulty: "medium",
          category: "Binary Tree",
          link: "https://practice.geeksforgeeks.org/problems/min-distance-between-two-given-nodes-of-a-binary-tree/1",
          description: "Find the distance between two nodes in a binary tree."
      },
      {
          id: 33,
          title: "Kth Ancestor of node in a Binary tree",
          difficulty: "hard",
          category: "Binary Tree",
          link: "https://www.geeksforgeeks.org/kth-ancestor-node-binary-tree-set-2/",
          description: "Find the Kth ancestor of a node in a binary tree."
      },
  
    //Stack & Queue
    
    {
      id: 1,
      title: "Implement Stack from Scratch",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://www.tutorialspoint.com/javaexamples/data_stack.htm",
      description: "Implement a stack data structure from scratch."
  },
  {
      id: 2,
      title: "Implement Queue from Scratch",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/",
      description: "Implement a queue data structure from scratch."
  },
  {
      id: 3,
      title: "Implement 2 Stack in an Array",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://practice.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1",
      description: "Implement two stacks in a single array."
  },
  {
      id: 4,
      title: "Find the Middle Element of a Stack",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://www.geeksforgeeks.org/design-a-stack-with-find-middle-operation/",
      description: "Find the middle element of a stack in constant time."
  },
  {
      id: 5,
      title: "Implement N Stacks in an Array",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://www.geeksforgeeks.org/efficiently-implement-k-stacks-single-array/",
      description: "Implement 'N' stacks using a single array."
  },
  {
      id: 6,
      title: "Check if Expression has Valid Parentheses",
      difficulty: "easy",
      category: "Stacks & Queues",
      link: "https://practice.geeksforgeeks.org/problems/parenthesis-checker/0",
      description: "Check if an expression has valid or balanced parentheses."
  },
  {
      id: 7,
      title: "Reverse a String Using Stack",
      difficulty: "easy",
      category: "Stacks & Queues",
      link: "https://practice.geeksforgeeks.org/problems/reverse-a-string-using-stack/1",
      description: "Reverse a given string using stack."
  },
  {
      id: 8,
      title: "Design a Stack Supporting getMin() in O(1) Time",
      difficulty: "hard",
      category: "Stacks & Queues",
      link: "https://practice.geeksforgeeks.org/problems/special-stack/1",
      description: "Design a stack that supports getting the minimum element in constant time and extra space."
  },
  {
      id: 9,
      title: "Find the Next Greater Element",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://practice.geeksforgeeks.org/problems/next-larger-element/0",
      description: "Find the next greater element for each element in an array."
  },
  {
      id: 10,
      title: "The Celebrity Problem",
      difficulty: "hard",
      category: "Stacks & Queues",
      link: "https://practice.geeksforgeeks.org/problems/the-celebrity-problem/1",
      description: "Identify the celebrity in a party."
  },
  {
      id: 11,
      title: "Arithmetic Expression Evaluation",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://www.geeksforgeeks.org/arithmetic-expression-evalution/",
      description: "Evaluate arithmetic expressions."
  },
  {
      id: 12,
      title: "Evaluation of Postfix Expression",
      difficulty: "easy",
      category: "Stacks & Queues",
      link: "https://practice.geeksforgeeks.org/problems/evaluation-of-postfix-expression/0",
      description: "Evaluate a postfix expression using a stack."
  },
  {
      id: 13,
      title: "Insert an Element at the Bottom of a Stack",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://www.geeksforgeeks.org/program-to-insert-an-element-at-the-bottom-of-a-stack/",
      description: "Insert an element at the bottom of a stack without using any other data structure."
  },
  {
      id: 14,
      title: "Reverse a Stack Using Recursion",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://www.geeksforgeeks.org/reverse-a-stack-using-recursion/",
      description: "Reverse a stack using recursion."
  },
  {
      id: 15,
      title: "Sort a Stack Using Recursion",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://practice.geeksforgeeks.org/problems/sort-a-stack/1",
      description: "Sort a stack using recursion."
  },
  {
      id: 16,
      title: "Merge Overlapping Intervals",
      difficulty: "hard",
      category: "Stacks & Queues",
      link: "https://practice.geeksforgeeks.org/problems/overlapping-intervals/0",
      description: "Merge overlapping intervals in an array."
  },
  {
      id: 17,
      title: "Largest Rectangular Area in Histogram",
      difficulty: "hard",
      category: "Stacks & Queues",
      link: "https://practice.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram/0",
      description: "Find the largest rectangular area in a histogram."
  },
  {
      id: 18,
      title: "Length of the Longest Valid Substring",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://practice.geeksforgeeks.org/problems/valid-substring0624/1",
      description: "Find the length of the longest valid substring."
  },
  {
      id: 19,
      title: "Expression Contains Redundant Bracket",
      difficulty: "easy",
      category: "Stacks & Queues",
      link: "https://www.geeksforgeeks.org/expression-contains-redundant-bracket-not/",
      description: "Check if an expression contains redundant brackets."
  },
  {
      id: 20,
      title: "Implement Stack Using Queue",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://practice.geeksforgeeks.org/problems/stack-using-two-queues/1",
      description: "Implement a stack using two queues."
  },
  {
      id: 21,
      title: "Implement Stack Using Deque",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://www.geeksforgeeks.org/implement-stack-queue-using-deque/",
      description: "Implement a stack using deque."
  },
  {
      id: 22,
      title: "Stack Permutations",
      difficulty: "hard",
      category: "Stacks & Queues",
      link: "https://www.geeksforgeeks.org/stack-permutations-check-if-an-array-is-stack-permutation-of-other/",
      description: "Check if an array is a stack permutation of another."
  },
  {
      id: 23,
      title: "Implement Queue Using Stack",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://practice.geeksforgeeks.org/problems/queue-using-two-stacks/1",
      description: "Implement a queue using two stacks."
  },
  {
      id: 24,
      title: "Implement N Queue in an Array",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://www.geeksforgeeks.org/efficiently-implement-k-queues-single-array/",
      description: "Implement 'N' queues using a single array."
  },
  {
      id: 25,
      title: "Implement a Circular Queue",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://www.geeksforgeeks.org/circular-queue-set-1-introduction-array-implementation/",
      description: "Implement a circular queue using an array."
  },
  {
      id: 26,
      title: "LRU Cache Implementation",
      difficulty: "hard",
      category: "Stacks & Queues",
      link: "https://practice.geeksforgeeks.org/problems/lru-cache/1",
      description: "Implement an LRU (Least Recently Used) cache."
  },
  {
      id: 27,
      title: "Reverse a Queue Using Recursion",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://practice.geeksforgeeks.org/problems/queue-reversal/1",
      description: "Reverse a queue using recursion."
  },
  {
      id: 28,
      title: "Reverse the First K Elements of a Queue",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://practice.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1",
      description: "Reverse the first 'K' elements of a queue."
  },
  {
      id: 29,
      title: "Interleave the First Half of the Queue with the Second Half",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://www.geeksforgeeks.org/interleave-first-half-queue-second-half/",
      description: "Interleave the first half of a queue with the second half."
  },
  {
      id: 30,
      title: "Find the First Circular Tour that Visits All Petrol Pumps",
      difficulty: "hard",
      category: "Stacks & Queues",
      link: "https://practice.geeksforgeeks.org/problems/circular-tour/1",
      description: "Find the starting point for a circular tour of gas stations."
  },
  {
      id: 31,
      title: "Minimum Time to Rot All Oranges",
      difficulty: "hard",
      category: "Stacks & Queues",
      link: "https://practice.geeksforgeeks.org/problems/rotten-oranges/0",
      description: "Find the minimum time required to rot all oranges."
  },
  {
      id: 32,
      title: "Distance of Nearest Cell Having 1 in a Binary Matrix",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://practice.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1/0",
      description: "Find the distance of the nearest cell containing 1 in a binary matrix."
  },
  {
      id: 33,
      title: "First Negative Integer in Every Window of Size K",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://practice.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k/0",
      description: "Find the first negative integer in each window of size 'K'."
  },
  {
      id: 34,
      title: "Check if All Levels of Two Trees are Anagrams",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://www.geeksforgeeks.org/check-if-all-levels-of-two-trees-are-anagrams-or-not/",
      description: "Check if all levels of two trees are anagrams."
  },
  {
      id: 35,
      title: "Sum of Minimum and Maximum Elements of All Subarrays of Size K",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://www.geeksforgeeks.org/sum-minimum-maximum-elements-subarrays-size-k/",
      description: "Find the sum of minimum and maximum elements of all subarrays of size 'K'."
  },
  {
      id: 36,
      title: "Minimum Sum of Squares of Character Counts After Removing K Characters",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://practice.geeksforgeeks.org/problems/game-with-string/0",
      description: "Find the minimum sum of squares of character counts in a string after removing 'K' characters."
  },
  {
      id: 37,
      title: "First Non-Repeating Character in a Stream",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream/0",
      description: "Find the first non-repeating character in a stream using a queue."
  },
  {
      id: 38,
      title: "Next Smaller Element",
      difficulty: "medium",
      category: "Stacks & Queues",
      link: "https://www.geeksforgeeks.org/next-smaller-element/",
      description: "Find the next smaller element for each element in an array."
  },

    // Linked List
    {
      id: 1,
      title: "Reverse the Linked List (Iterative and Recursive)",
      difficulty: "medium",
      category: "Linked List",
      link: "https://www.geeksforgeeks.org/reverse-a-linked-list/",
      description: "Write a Program to reverse the Linked List. (Both Iterative and recursive)"
  },
  {
      id: 2,
      title: "Reverse a Linked List in Group of Given Size",
      difficulty: "medium",
      category: "Linked List",
      link: "https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1",
      description: "Reverse a Linked List in group of Given Size. [Very Imp]"
  },
  {
      id: 3,
      title: "Detect Loop in a Linked List",
      difficulty: "medium",
      category: "Linked List",
      link: "https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1",
      description: "Write a program to Detect loop in a linked list."
  },
  {
      id: 4,
      title: "Delete Loop in a Linked List",
      difficulty: "medium",
      category: "Linked List",
      link: "https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1",
      description: "Write a program to Delete loop in a linked list."
  },
  {
      id: 5,
      title: "Find the Starting Point of the Loop",
      difficulty: "medium",
      category: "Linked List",
      link: "https://www.geeksforgeeks.org/find-first-node-of-loop-in-a-linked-list/",
      description: "Find the starting point of the loop."
  },
  {
      id: 6,
      title: "Remove Duplicates in a Sorted Linked List",
      difficulty: "medium",
      category: "Linked List",
      link: "https://practice.geeksforgeeks.org/problems/remove-duplicate-element-from-sorted-linked-list/1",
      description: "Remove Duplicates in a sorted Linked List."
  },
  {
      id: 7,
      title: "Remove Duplicates in an Unsorted Linked List",
      difficulty: "medium",
      category: "Linked List",
      link: "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-an-unsorted-linked-list/1",
      description: "Remove Duplicates in an Un-sorted Linked List."
  },
  {
      id: 8,
      title: "Move the Last Element to Front in a Linked List",
      difficulty: "medium",
      category: "Linked List",
      link: "https://www.geeksforgeeks.org/move-last-element-to-front-of-a-given-linked-list/",
      description: "Write a Program to Move the last element to Front in a Linked List."
  },
  {
      id: 9,
      title: "Add '1' to a Number Represented as a Linked List",
      difficulty: "medium",
      category: "Linked List",
      link: "https://practice.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1",
      description: "Add “1” to a number represented as a Linked List."
  },
  {
      id: 10,
      title: "Add Two Numbers Represented by Linked Lists",
      difficulty: "medium",
      category: "Linked List",
      link: "https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1",
      description: "Add two numbers represented by linked lists."
  },
  {
      id: 11,
      title: "Intersection of Two Sorted Linked Lists",
      difficulty: "medium",
      category: "Linked List",
      link: "https://practice.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/1",
      description: "Intersection of two Sorted Linked List."
  },
  {
      id: 12,
      title: "Intersection Point of Two Linked Lists",
      difficulty: "medium",
      category: "Linked List",
      link: "https://practice.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1",
      description: "Intersection Point of two Linked Lists."
  },
  {
      id: 13,
      title: "Merge Sort for Linked Lists",
      difficulty: "hard",
      category: "Linked List",
      link: "https://practice.geeksforgeeks.org/problems/sort-a-linked-list/1",
      description: "Merge Sort For Linked lists. [Very Important]"
  },
  {
      id: 14,
      title: "Quicksort for Linked Lists",
      difficulty: "hard",
      category: "Linked List",
      link: "https://practice.geeksforgeeks.org/problems/quick-sort-on-linked-list/1",
      description: "Quicksort for Linked Lists. [Very Important]"
  },
  {
      id: 15,
      title: "Find the Middle Element of a Linked List",
      difficulty: "medium",
      category: "Linked List",
      link: "https://leetcode.com/problems/middle-of-the-linked-list/",
      description: "Find the middle Element of a linked list."
  },
  {
      id: 16,
      title: "Check if a Linked List is a Circular Linked List",
      difficulty: "medium",
      category: "Linked List",
      link: "https://practice.geeksforgeeks.org/problems/circular-linked-list/1",
      description: "Check if a linked list is a circular linked list."
  },
  {
      id: 17,
      title: "Split a Circular Linked List into Two Halves",
      difficulty: "medium",
      category: "Linked List",
      link: "https://practice.geeksforgeeks.org/problems/split-a-circular-linked-list-into-two-halves/1",
      description: "Split a Circular linked list into two halves."
  },
  {
      id: 18,
      title: "Check if a Singly Linked List is a Palindrome",
      difficulty: "medium",
      category: "Linked List",
      link: "https://practice.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1",
      description: "Write a Program to check whether the Singly Linked list is a palindrome or not."
  },
  {
      id: 19,
      title: "Deletion from a Circular Linked List",
      difficulty: "medium",
      category: "Linked List",
      link: "https://www.geeksforgeeks.org/deletion-circular-linked-list/",
      description: "Deletion from a Circular Linked List."
  },
  {
      id: 20,
      title: "Reverse a Doubly Linked List",
      difficulty: "medium",
      category: "Linked List",
      link: "https://practice.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1",
      description: "Reverse a Doubly Linked list."
  },
  {
    id: 21,
    title: "Reverse Linked List",
    difficulty: "medium",
    category: "Linked List",
    link: "https://leetcode.com/problems/reverse-linked-list/",
    description: "Reverse a singly linked list."
  },
  {
    id: 22,
    title: "Linked List Cycle",
    difficulty: "medium",
    category: "Linked List",
    link: "https://leetcode.com/problems/linked-list-cycle/",
    description: "Detect if a linked list has a cycle."
  },
  {
    id: 23,
    title: "Merge Two Sorted Lists",
    difficulty: "easy",
    category: "Linked List",
    link: "https://leetcode.com/problems/merge-two-sorted-lists/",
    description: "Merge two sorted linked lists into a new sorted list."
  },
  {
    id: 24,
    title: "Delete without Head node",
    difficulty: "easy",
    category: "Linked List",
    link: "https://leetcode.com/problems/delete-node-in-a-linked-list/",
    description: "Delete a given node from a linked list without the head node."
  },
  {
    id: 25,
    title: "Remove duplicates from an unsorted linked list",
    difficulty: "medium",
    category: "Linked List",
    link: "https://leetcode.com/problems/remove-duplicates-from-unsorted-list/",
    description: "Remove duplicate nodes from an unsorted linked list."
  },
  {
    id: 26,
    title: "Sort a linked list of 0s, 1s, and 2s",
    difficulty: "medium",
    category: "Linked List",
    link: "https://leetcode.com/problems/sort-list/",
    description: "Sort a linked list containing 0s, 1s, and 2s in linear time."
  },
  {
    id: 27,
    title: "Multiply two numbers represented by linked lists",
    difficulty: "medium",
    category: "Linked List",
    link: "https://leetcode.com/problems/multiply-strings/",
    description: "Multiply two numbers represented by linked lists."
  },
  {
    id: 28,
    title: "Remove nth node from the end of the list",
    difficulty: "medium",
    category: "Linked List",
    link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    description: "Remove the nth node from the end of a linked list."
  },
  {
    id: 29,
    title: "Reorder List",
    difficulty: "medium",
    category: "Linked List",
    link: "https://leetcode.com/problems/reorder-list/",
    description: "Reorder a linked list such that the first element is followed by the last, second by the second last, and so on."
  },
  {
    id: 30,
    title: "Detect and remove loop in a linked list",
    difficulty: "hard",
    category: "Linked List",
    link: "https://leetcode.com/problems/linked-list-cycle-ii/",
    description: "Detect and remove the loop in a linked list."
  },
  {
    id: 31,
    title: "Get the Intersection Point of Two Linked Lists",
    difficulty: "medium",
    category: "Linked List",
    link: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    description: "Find the intersection point of two linked lists."
  },
  {
    id: 32,
    title: "Flatten a linked list with next and child pointers",
    difficulty: "hard",
    category: "Linked List",
    link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
    description: "Flatten a multilevel doubly linked list."
  },
  {
    id: 33,
    title: "Linked List in Zig-Zag Fashion",
    difficulty: "medium",
    category: "Linked List",
    link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
    description: "Rearrange a linked list in a zigzag fashion."
  },
  {
    id: 34,
    title: "Reverse a Doubly Linked List",
    difficulty: "medium",
    category: "Linked List",
    link: "https://leetcode.com/problems/reverse-doubly-linked-list/",
    description: "Reverse a doubly linked list."
  },
  {
    id: 35,
    title: "Delete nodes with greater value on the right side",
    difficulty: "medium",
    category: "Linked List",
    link: "https://leetcode.com/problems/delete-nodes-which-have-a-greater-value-on-right-side/",
    description: "Delete all nodes which have a greater node value on the right side."
  },
  {
    id: 36,
    title: "Segregate even and odd elements in a linked list",
    difficulty: "medium",
    category: "Linked List",
    link: "https://leetcode.com/problems/segregate-even-and-odd-elements-in-a-linked-list/",
    description: "Rearrange a linked list such that all even nodes are placed before odd nodes."
  },
  {
    id: 37,
    title: "Point to next higher value node in a linked list with an arbitrary pointer",
    difficulty: "medium",
    category: "Linked List",
    link: "https://leetcode.com/problems/point-to-next-higher-value-node-in-a-linked-list/",
    description: "Create an arbitrary pointer that points to the next node with a higher value."
  },
  {
    id: 38,
    title: "Rearrange a given linked list in place",
    difficulty: "medium",
    category: "Linked List",
    link: "https://leetcode.com/problems/rearrange-a-given-linked-list-in-place/",
    description: "Rearrange a given linked list in place such that odd indexed nodes appear first."
  },
  {
    id: 39,
    title: "Sort Biotonic Doubly Linked Lists",
    difficulty: "hard",
    category: "Linked List",
    link: "https://leetcode.com/problems/sort-biotonic-doubly-linked-lists/",
    description: "Sort a biotonic doubly linked list."
  },

  /* Dynamic Programming */
  {
    id: 1,
    title: "Longest Increasing Subsequence",
    difficulty: "medium",
    category: "Dynamic Programming",
    link: "https://leetcode.com/problems/longest-increasing-subsequence/",
    description: "Find the length of the longest increasing subsequence in an array."
  },
  {
    id: 2,
    title: "0/1 Knapsack Problem",
    difficulty: "medium",
    category: "Dynamic Programming",
    link: "https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem/",
    description: "Given weights and values of items, determine the maximum value that can be obtained in the knapsack."
  },
  {
    id: 3,
    title: "Coin Change Problem",
    difficulty: "medium",
    category: "Dynamic Programming",
    link: "https://leetcode.com/problems/coin-change/",
    description: "Find the minimum number of coins required to make a given sum."
  },
  {
    id: 4,
    title: "Longest Common Subsequence",
    difficulty: "medium",
    category: "Dynamic Programming",
    link: "https://leetcode.com/problems/longest-common-subsequence/",
    description: "Find the longest subsequence present in both strings."
  },
  {
    "id": 5,
    "title": "Matrix Chain Multiplication",
    "difficulty": "hard",
    "category": "Dynamic Programming",
    "link": "https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/",
    "description": "Given a sequence of matrices, find the most efficient way to multiply them."
  },
  {
    "id": 6,
    "title": "Rod Cutting Problem",
    "difficulty": "medium",
    "category": "Dynamic Programming",
    "link": "https://www.geeksforgeeks.org/cutting-a-rod-dp-13/",
    "description": "Maximize profit by cutting the rod into smaller pieces."
  },
  {
    "id": 7,
    "title": "Edit Distance",
    "difficulty": "hard",
    "category": "Dynamic Programming",
    "link": "https://leetcode.com/problems/edit-distance/",
    "description": "Given two strings, find the minimum number of operations required to convert one string into the other."
  },
  {
    "id": 8,
    "title": "Partition Equal Subset Sum",
    "difficulty": "medium",
    "category": "Dynamic Programming",
    "link": "https://leetcode.com/problems/partition-equal-subset-sum/",
    "description": "Determine if a given array can be partitioned into two subsets such that the sum of elements in both subsets is the same."
  },
  {
    "id": 9,
    "title": "Minimum Path Sum",
    "difficulty": "medium",
    "category": "Dynamic Programming",
    "link": "https://leetcode.com/problems/minimum-path-sum/",
    "description": "Find the minimum path sum from the top left to the bottom right of a grid."
  },
  {
    "id": 10,
    "title": "House Robber Problem",
    "difficulty": "medium",
    "category": "Dynamic Programming",
    "link": "https://leetcode.com/problems/house-robber/",
    "description": "Given an array of non-negative integers representing the amount of money of each house, find the maximum amount of money you can rob tonight without alerting the police."
  },
  {
    "id": 11,
    "title": "Egg Dropping Problem",
    "difficulty": "hard",
    "category": "Dynamic Programming",
    "link": "https://practice.geeksforgeeks.org/problems/egg-dropping-puzzle/",
    "description": "Given a number of eggs and floors, find the minimum number of trials required to find the highest floor from which an egg can be dropped without breaking."
  },
  {
    "id": 12,
    "title": "Word Break Problem",
    "difficulty": "medium",
    "category": "Dynamic Programming",
    "link": "https://leetcode.com/problems/word-break/",
    "description": "Given a string and a dictionary of words, determine if the string can be segmented into a space-separated sequence of dictionary words."
  },
  {
    "id": 13,
    "title": "Subset Sum Problem",
    "difficulty": "medium",
    "category": "Dynamic Programming",
    "link": "https://practice.geeksforgeeks.org/problems/subset-sum-problem/",
    "description": "Determine if there is a subset of the given set with sum equal to a given sum."
  },
  {
    "id": 14,
    "title": "Maximum Subarray Sum",
    "difficulty": "medium",
    "category": "Dynamic Programming",
    "link": "https://leetcode.com/problems/maximum-subarray/",
    "description": "Find the contiguous subarray within a one-dimensional numeric array which has the largest sum."
  },
  {
    "id": 15,
    "title": "Palindromic Substrings",
    "difficulty": "medium",
    "category": "Dynamic Programming",
    "link": "https://leetcode.com/problems/palindromic-substrings/",
    "description": "Count how many palindromic substrings exist in a given string."
  },

  /* Graph */

  {
    id: 1,
    title: "Shortest Path in Binary Matrix",
    difficulty: "medium",
    category: "Graph",
    link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
    description: "Find the shortest path in an unweighted binary matrix."
  },
  {
    id: 2,
    title: "Max Area of Island",
    difficulty: "medium",
    category: "Graph",
    link: "https://leetcode.com/problems/max-area-of-island/",
    description: "Traverse a graph using DFS and output the area of the largest island."
  },
  {
    "id": 3,
    "title": "Detect Cycle in a Directed Graph",
    "difficulty": "hard",
    "category": "Graph",
    "link": "https://www.geeksforgeeks.org/detect-cycle-in-a-graph/",
    "description": "Detect a cycle in a directed graph using DFS."
  },
  {
    "id": 4,
    "title": "Course Schedule",
    "difficulty": "medium",
    "category": "Graph",
    "link": "https://leetcode.com/problems/course-schedule/",
    "description": "Perform a topological sort on a Directed Acyclic Graph (DAG)."
  },
  {
    "id": 5,
    "title": "Dijkstra's Algorithm",
    "difficulty": "medium",
    "category": "Graph",
    "link": "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-approach/",
    "description": "Find the shortest path in a weighted graph."
  },
  {
    "id": 6,
    "title": "Kruskal's Algorithm",
    "difficulty": "medium",
    "category": "Graph",
    "link": "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm/",
    "description": "Find the minimum spanning tree of a graph using Kruskal's algorithm."
  },
  {
    "id": 7,
    "title": "Prim's Algorithm",
    "difficulty": "medium",
    "category": "Graph",
    "link": "https://www.geeksforgeeks.org/prim-algorithm-using-adjacency-matrix/",
    "description": "Find the minimum spanning tree using Prim's algorithm."
  },
  {
    "id": 8,
    "title": "Bellman-Ford Algorithm",
    "difficulty": "medium",
    "category": "Graph",
    "link": "https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/",
    "description": "Find the shortest path in a graph with negative weights."
  },
  {
    "id": 9,
    "title": "Number of Connected Components in an Undirected Graph",
    "difficulty": "medium",
    "category": "Graph",
    "link": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
    "description": "Find the number of connected components in an undirected graph."
  },
  {
    "id": 10,
    "title": "Is Graph Bipartite?",
    "difficulty": "medium",
    "category": "Graph",
    "link": "https://leetcode.com/problems/is-graph-bipartite/",
    "description": "Check if a graph is bipartite."
  },
  {
    "id": 11,
    "title": "Strongly Connected Components",
    "difficulty": "hard",
    "category": "Graph",
    "link": "https://www.geeksforgeeks.org/strongly-connected-components/",
    "description": "Find all strongly connected components in a directed graph."
  },
  {
    "id": 12,
    "title": "Flood Fill",
    "difficulty": "easy",
    "category": "Graph",
    "link": "https://leetcode.com/problems/flood-fill/",
    "description": "Implement the flood fill algorithm using DFS or BFS."
  },
  {
    "id": 13,
    "title": "A* Search Algorithm",
    "difficulty": "medium",
    "category": "Graph",
    "link": "https://www.geeksforgeeks.org/a-search-algorithm/",
    "description": "Implement the A* search algorithm for finding the shortest path."
  },
  {
    "id": 14,
    "title": "Graph Coloring",
    "difficulty": "hard",
    "category": "Graph",
    "link": "https://www.geeksforgeeks.org/graph-coloring-using-backtracking/",
    "description": "Find the minimum number of colors required to color a graph such that no two adjacent nodes have the same color."
  },
  {
    "id": 15,
    "title": "Floyd Warshall Algorithm",
    "difficulty": "hard",
    "category": "Graph",
    "link": "https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/",
    "description": "Find the shortest paths between all pairs of vertices in a graph."
  },

  /* Trees */

  {
    "id": 1,
    "title": "Binary Tree Inorder Traversal",
    "difficulty": "easy",
    "category": "Tree",
    "link": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    "description": "Implement an inorder traversal of a binary tree."
  },
  {
    "id": 2,
    "title": "Binary Tree Preorder Traversal",
    "difficulty": "easy",
    "category": "Tree",
    "link": "https://leetcode.com/problems/binary-tree-preorder-traversal/",
    "description": "Implement a preorder traversal of a binary tree."
  },
  {
    "id": 3,
    "title": "Binary Tree Postorder Traversal",
    "difficulty": "easy",
    "category": "Tree",
    "link": "https://leetcode.com/problems/binary-tree-postorder-traversal/",
    "description": "Implement a postorder traversal of a binary tree."
  },
  {
    "id": 4,
    "title": "Maximum Depth of Binary Tree",
    "difficulty": "easy",
    "category": "Tree",
    "link": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    "description": "Find the maximum depth (height) of a binary tree."
  },
  {
    "id": 5,
    "title": "Symmetric Tree",
    "difficulty": "easy",
    "category": "Tree",
    "link": "https://leetcode.com/problems/symmetric-tree/",
    "description": "Check whether a binary tree is symmetric (mirrored around its center)."
  },
  {
    "id": 6,
    "title": "Binary Tree Level Order Traversal",
    "difficulty": "medium",
    "category": "Tree",
    "link": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    "description": "Implement a level order traversal (BFS) of a binary tree."
  },
  {
    "id": 7,
    "title": "Path Sum",
    "difficulty": "medium",
    "category": "Tree",
    "link": "https://leetcode.com/problems/path-sum/",
    "description": "Given a binary tree and a sum, find all paths from root to leaf nodes where the sum of the values along the path equals the target sum."
  },
  {
    "id": 8,
    "title": "Construct Binary Tree from Preorder and Inorder Traversal",
    "difficulty": "medium",
    "category": "Tree",
    "link": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    "description": "Construct a binary tree given its preorder and inorder traversal."
  },
  {
    "id": 9,
    "title": "Validate Binary Search Tree",
    "difficulty": "medium",
    "category": "Tree",
    "link": "https://leetcode.com/problems/validate-binary-search-tree/",
    "description": "Given a binary tree, determine if it is a valid binary search tree (BST)."
  },
  {
    "id": 10,
    "title": "Lowest Common Ancestor of a Binary Search Tree",
    "difficulty": "medium",
    "category": "Tree",
    "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    "description": "Find the lowest common ancestor (LCA) of two nodes in a binary search tree (BST)."
  },
  {
    "id": 11,
    "title": "Flatten Binary Tree to Linked List",
    "difficulty": "medium",
    "category": "Tree",
    "link": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
    "description": "Flatten a binary tree into a linked list in-place using preorder traversal."
  },
  {
    "id": 12,
    "title": "Diameter of Binary Tree",
    "difficulty": "medium",
    "category": "Tree",
    "link": "https://leetcode.com/problems/diameter-of-binary-tree/",
    "description": "Find the diameter of a binary tree. The diameter is the length of the longest path between any two nodes in the tree."
  },
  {
    "id": 13,
    "title": "Kth Smallest Element in a BST",
    "difficulty": "medium",
    "category": "Tree",
    "link": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    "description": "Find the kth smallest element in a binary search tree."
  },
  {
    "id": 14,
    "title": "Binary Tree Maximum Path Sum",
    "difficulty": "hard",
    "category": "Tree",
    "link": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    "description": "Find the maximum path sum in a binary tree. The path can start and end at any node in the tree."
  },
  {
    "id": 15,
    "title": "Serialize and Deserialize Binary Tree",
    "difficulty": "hard",
    "category": "Tree",
    "link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    "description": "Implement serialization and deserialization of a binary tree."
  },

  /* Recursion */
  {
    "id": 1,
    "title": "Factorial of a Number",
    "difficulty": "easy",
    "category": "Recursion",
    "link": "https://www.geeksforgeeks.org/program-to-find-factorial-of-a-number-using-recursion/",
    "description": "Write a function to calculate the factorial of a given number using recursion."
},
{
    "id": 2,
    "title": "Fibonacci Series",
    "difficulty": "easy",
    "category": "Recursion",
    "link": "https://leetcode.com/problems/fibonacci-number/",
    "description": "Write a recursive function to print the nth Fibonacci number."
},
{
    "id": 3,
    "title": "Power of a Number",
    "difficulty": "medium",
    "category": "Recursion",
    "link": "https://www.geeksforgeeks.org/power-in-c-recursive-approach/",
    "description": "Write a recursive function to calculate the power of a number (i.e., x^n)."
},
{
    "id": 4,
    "title": "Sum of Digits",
    "difficulty": "easy",
    "category": "Recursion",
    "link": "https://www.geeksforgeeks.org/sum-of-digits-of-a-number-using-recursion/",
    "description": "Write a function that calculates the sum of digits of a number using recursion."
},
{
    "id": 5,
    "title": "Reverse a String",
    "difficulty": "easy",
    "category": "Recursion",
    "link": "https://leetcode.com/problems/reverse-string/",
    "description": "Write a recursive function to reverse a string."
},
{
    "id": 6,
    "title": "Tower of Hanoi",
    "difficulty": "medium",
    "category": "Recursion",
    "link": "https://www.geeksforgeeks.org/c-program-for-tower-of-hanoi/",
    "description": "Implement the Tower of Hanoi problem using recursion."
},
{
    "id": 7,
    "title": "Permutations of a String",
    "difficulty": "medium",
    "category": "Recursion",
    "link": "https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/",
    "description": "Given a string, print all the permutations of it using recursion."
},
{
    "id": 8,
    "title": "Binary Search (Recursive)",
    "difficulty": "medium",
    "category": "Recursion",
    "link": "https://www.geeksforgeeks.org/binary-search/",
    "description": "Implement binary search recursively on a sorted array."
},
{
    "id": 9,
    "title": "Nth Triangular Number",
    "difficulty": "easy",
    "category": "Recursion",
    "link": "https://www.geeksforgeeks.org/triangular-number/",
    "description": "Write a recursive function to find the nth triangular number."
},
{
    "id": 10,
    "title": "Merge Sort",
    "difficulty": "medium",
    "category": "Recursion",
    "link": "https://www.geeksforgeeks.org/merge-sort/",
    "description": "Implement merge sort using recursion."
},

/* Two Pointer Approach */
{
  "id": 1,
  "title": "Move Zeroes",
  "difficulty": "easy",
  "category": "Two Pointer",
  "link": "https://leetcode.com/problems/move-zeroes/",
  "description": "Given an array of integers, move all zeroes to the end without changing the order of non-zero elements."
},
{
  "id": 2,
  "title": "Container With Most Water",
  "difficulty": "medium",
  "category": "Two Pointer",
  "link": "https://leetcode.com/problems/container-with-most-water/",
  "description": "Given an array of heights, find two lines that form a container that holds the most water."
},
{
  "id": 3,
  "title": "Palindrome Linked List",
  "difficulty": "medium",
  "category": "Two Pointer",
  "link": "https://leetcode.com/problems/palindrome-linked-list/",
  "description": "Given a singly linked list, check if it is a palindrome using a two-pointer technique."
},
{
  "id": 4,
  "title": "3Sum",
  "difficulty": "medium",
  "category": "Two Pointer",
  "link": "https://leetcode.com/problems/3sum/",
  "description": "Given an array of integers, find all unique triplets in the array that sum up to zero."
},
{
  "id": 5,
  "title": "Valid Palindrome",
  "difficulty": "easy",
  "category": "Two Pointer",
  "link": "https://leetcode.com/problems/valid-palindrome/",
  "description": "Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases."
},
{
  "id": 6,
  "title": "Sort Colors",
  "difficulty": "medium",
  "category": "Two Pointer",
  "link": "https://leetcode.com/problems/sort-colors/",
  "description": "Sort an array consisting of 0's, 1's, and 2's in-place using the two-pointer technique."
},
{
  "id": 7,
  "title": "Pair Sum",
  "difficulty": "easy",
  "category": "Two Pointer",
  "link": "https://www.hackerrank.com/challenges/pair-sum/problem",
  "description": "Find if there exists a pair in the sorted array whose sum equals the target value."
},
{
  "id": 8,
  "title": "Intersection of Two Arrays II",
  "difficulty": "easy",
  "category": "Two Pointer",
  "link": "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
  "description": "Given two arrays, return their intersection, including duplicate elements."
},
{
  "id": 9,
  "title": "Find the Middle of the Linked List",
  "difficulty": "easy",
  "category": "Two Pointer",
  "link": "https://leetcode.com/problems/find-the-middle-of-the-linked-list/",
  "description": "Using two pointers, find the middle node of a linked list."
}
];
