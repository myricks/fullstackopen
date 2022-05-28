const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app.js')
const Blog = require('../models/blog')

const api = supertest(app)

const testBlogs = [
    {
        title: 'testBlog1',
        author: 'Testi Bloggaaja',
        url: 'url.testi',
        likes: 5
    },
    {
        title: 'testBlog2',
        author: 'Blogi Testaaja',
        url: 'testi.url',
        likes: 10
    }
]

beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(testBlogs)
})

test('blogs is returned as json', async () => {
    await api.get('/api/blogs')
        .expect(200)
        .expect('Content-type', /application\/json/)
})

test('blogs api return correct amount of blogs', async () => {
    const blogs = await api.get('/api/blogs')
    expect(blogs.body.length).toEqual(2)
})

test('blogs api return id instead of _id', async () => {
    const blogs = await api.get('/api/blogs')
    expect(blogs.body[0].id).toBeDefined()
})

test('blog can be added', async () => {
    const blog = {
        title: 'testBlog3',
        author: 'Testi Testaaja',
        url: 'testi.testi',
        likes: 15
    }
    await api.post('/api/blogs')
        .send(blog)
        .expect(201)
        .expect('Content-type', /application\/json/)
    const blogs = await api.get('/api/blogs')
    expect(blogs.body.length).toEqual(testBlogs.length + 1)
})

test('blog without likes default to zero likes', async () => {
    const blog = {
        title: 'testBlog3',
        author: 'Testi Testaaja',
        url: 'testi.testi',
    }
    await api.post('/api/blogs')
        .send(blog)
        .expect(201)
        .expect('Content-type', /application\/json/)
    const blogs = await api.get('/api/blogs')
    expect(blogs.body[2].likes).toEqual(0)
})

describe('Sending blog without', () => {
    test('title returns status 400', async () => {
        const blog = {
            author: 'Testi Testaaja',
            url: 'testi.testi',
            likes: 15
        }
        await api.post('/api/blogs')
            .send(blog)
            .expect(400)
    })
    test('url returns status 400', async () => {
        const blog = {
            title: 'testBlog3',
            author: 'Testi Testaaja',
            likes: 15
        }
        await api.post('/api/blogs')
            .send(blog)
            .expect(400)
    })
})

describe('Deletion of blog', () => {
    test('with correct id is succesful and returns 204', async () => {
        const blogs = await api.get('/api/blogs')
        const blog = blogs.body[0]
        await api.delete(`/api/blogs/${blog.id}`).expect(204)

        const blogsAtEnd = await api.get('/api/blogs')
        expect(blogsAtEnd.body).toHaveLength(testBlogs.length - 1)
    })
})

describe('Updating of blog', () => {
    test('with correct id updates fields correctly', async () => {
        const blogs = await api.get('/api/blogs')
        const blogToUpdate = blogs.body[0]
        const blog = {
            title: 'testBlog3',
            author: 'Testi Testaaja',
            url: 'testi.testi',
            likes: 15
        }
        await api.put(`/api/blogs/${blogToUpdate.id}`).send(blog)
        const blogsAtEnd = await api.get('/api/blogs')
        expect(blogsAtEnd.body[0].title).toContain('testBlog3')
    })
})

afterAll(() => {
    mongoose.disconnect()
})