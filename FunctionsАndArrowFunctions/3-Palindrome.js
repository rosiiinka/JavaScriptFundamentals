function palindrome([pali]) {
    for (let i = 0; i < pali.length / 2; i++)
        if (pali[i] != pali[pali.length - i - 1])
            return false;
    return true;
}
palindrome(["rentcar"])