const dummy = (blogs) => {
    return 1
}

const totalLikes = array => {
    const reducer = (sum, item) => {
        return sum + item
    }

    return array.length === 0 ? 0 : array.reduce(reducer, 0)
}

const favoriteBlog = array => {
    const reducer = (mostLikes, item) => {
        return mostLikes.likes > item.likes ? mostLikes : item
    }

    return array.length === 0 ? 0 : array.reduce(reducer, 0)
}

const mostBlogs = array => {
    const reducer = ({ blogs, mostPublished }, blog) => {
        if (blogs[blog.author]) {
            blogs[blog.author] += 1
        } else {
            blogs[blog.author] = 1
        }
        if (Object.keys(mostPublished).length === 0) {
            mostPublished = {
                author: blog.author,
                blogs: 1
            }
        } else if (blogs[blog.author] > mostPublished.blogs) {
            mostPublished = {
                author: blog.author,
                blogs: blogs[blog.author]
            }
        }

        return { blogs, mostPublished }
    }

    return array.length === 0 ? {} : array.reduce(reducer, { blogs: [], mostPublished: {} }).mostPublished;
}

const mostLikes = array => {
    const reducer = ({ blogs, mostLikes }, blog) => {
        if (blogs[blog.author]) {
            blogs[blog.author] += blog.likes
        } else {
            blogs[blog.author] = blog.likes
        }
        if (Object.keys(mostLikes).length === 0) {
            mostLikes = {
                author: blog.author,
                likes: blog.likes
            }
        } else if (blogs[blog.author] > mostLikes.likes) {
            mostLikes = {
                author: blog.author,
                likes: blogs[blog.author]
            }
        }

        return { blogs, mostLikes }
    }

    return array.length === 0 ? {} : array.reduce(reducer, { blogs: [], mostLikes: {} }).mostLikes;
}

module.exports = {
    dummy, totalLikes, favoriteBlog, mostLikes, mostBlogs
}
