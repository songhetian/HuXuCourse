import { describe, expect, it } from "vitest";
import { factorial, fibonacci } from "../components/MathUtils";
import { capitalizeWords, isPalindrome, reverseString } from "../components/StringUtil";
import { intersectArrays, removeDuplicates } from "../components/arrayUtil";



describe("math", () => {
    it("阶乘", () => {
        expect(factorial(3)).toBe(6);
    });
});

describe('string', () => {
    it('反转', () => {
        expect(reverseString('hello')).toBe('olleh');
    });
    it('首字母大写', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    it("字符回转", () => {
        expect(isPalindrome("hah")).toBe(true);
    });

});

describe('数组', () => {
    it('交集', () => {
        expect(intersectArrays([1, 2], [2])).toStrictEqual([2]);
    });

    it("去重", () => {
        expect(removeDuplicates([1, 2, 3, 4, 4, 3])).toStrictEqual([1, 2, 3, 4]);
    })
})