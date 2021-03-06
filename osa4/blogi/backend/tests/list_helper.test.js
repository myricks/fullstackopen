const { totalLikes, favoriteBlog, mostLikes, mostBlogs } = require('../utils/list_helper')

const blogs = [
    {
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7,
        __v: 0
    },
    {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5,
        __v: 0
    },
    {
        _id: "5a422b3a1b54a676234d17f9",
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 12,
        __v: 0
    },
    {
        _id: "5a422b891b54a676234d17fa",
        title: "First class tests",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
        likes: 10,
        __v: 0
    },
    {
        _id: "5a422ba71b54a676234d17fb",
        title: "TDD harms architecture",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
        likes: 0,
        __v: 0
    },
    {
        _id: "5a422bc61b54a676234d17fc",
        title: "Type wars",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
        likes: 2,
        __v: 0
    }
]

describe('Total likes of', () => {
    test('of empty list is zero', () => {
        expect(totalLikes([])).toBe(0)
    })
    test('of one blog likes is same its value', () => {
        expect(totalLikes([blogs[0].likes])).toBe(7)
    })
    test('of all blogs is correct', () => {
        const likes = blogs.map(blog => blog.likes)
        expect(totalLikes(likes)).toBe(36)
    })
})

describe('Blog with most likes is', () => {
    test('Canonical string reduction', () => {
        expect(favoriteBlog(blogs)).toEqual(blogs[2])
    })
})

describe('Author with most', () => {
    test('likes is Edsger W. Dijkstra', () => {
        expect(mostLikes(blogs)).toEqual({ author: 'Edsger W. Dijkstra', likes: 17 })
    })
    test('blogs published is Robert C. Martin', () => {
        expect(mostBlogs(blogs)).toEqual({ author: 'Robert C. Martin', blogs: 3 })
    })

})