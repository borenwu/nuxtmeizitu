import { Router } from 'express'

const router = Router()

// Mock posts
const blogs = [
    {
        img: 'http://oy988o88l.bkt.clouddn.com/example-work01.jpg',
        title:'Blog template',
        shortContent:'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
    },

    {
        img: 'http://oy988o88l.bkt.clouddn.com/example-work07.jpg',
        title:'Sunt nulla',
        shortContent:'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
    },

    {
        img: 'http://oy988o88l.bkt.clouddn.com/example-work02.jpg',
        title:'Android.com website',
        shortContent:'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
    },

    {
        img: 'http://oy988o88l.bkt.clouddn.com/example-work03.jpg',
        title:'Dashboard template',
        shortContent:'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
    },

    {
        img: 'http://oy988o88l.bkt.clouddn.com/example-work04.jpg',
        title:'Text-heavy website',
        shortContent:'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
    },

    {
        img: 'http://oy988o88l.bkt.clouddn.com/example-work08.jpg',
        title:'Ex officia laborum',
        shortContent:'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
    },

    {
        img: 'http://oy988o88l.bkt.clouddn.com/example-work05.jpg',
        title:'Stand-alone article',
        shortContent:'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
    },

    {
        img: 'http://oy988o88l.bkt.clouddn.com/example-work06.jpg',
        title:'MDL website',
        shortContent:'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
    },

    {
        img: 'http://oy988o88l.bkt.clouddn.com/example-work09.jpg',
        title:'Consequat ut quis',
        shortContent:'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
    },

]

/* GET users listing. */
router.get('/posts', function (req, res, next) {
    res.json(blogs)
})

/* GET user by ID. */
router.get('/posts/:id', function (req, res, next) {
    const id = parseInt(req.params.id)
    if (id >= 0 && id < users.length) {
        res.json(blogs[id])
    } else {
        res.sendStatus(404)
    }
})

export default router/**
 * Created by Administrator on 2017/10/21.
 */
