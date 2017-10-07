exports.index = function(req, res) {
	/*let content = {
		banner: [
		{
			id:1,
			url: '//image/img-1.jpg'
		},
		{
			id:2,
			url: '//image/img-1.jpg'
		}
				]
	}

	res.json(content)
	*/

	let content = {
		highlight: {
			url: '/assets/images/home/banner/highlight.jpg',
			title: 'สวนเลย'
		},
		thumbnail: [
		{
			url: '/assets/images/home/banner/thumbnail-1.jpg',
			title: 'คุย'
		},
		{
			url: '/assets/images/home/banner/thumbnail-2.jpg',
			title: 'กับ'
		},
		{
			url: '/assets/images/home/banner/thumbnail-3.jpg',
			title: 'เขา'
		},
		{
			url: '/assets/images/home/banner/thumbnail-4.jpg',
			title: 'ก่อน'
		}
		]
	}
	res.render('home.twig', content)
}