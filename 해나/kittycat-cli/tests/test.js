const palindrome = require("../utils/for_testing").palindrome;

describe("when there is initially 2 notes at db", () => {
    beforeEach(async () => {
        await Blog.deleteMany({});
        for (let blog of helper.initialBlogs) {
            let blogObject = new Blog(blog);
            await blogObject.save();
        }
    });
});
