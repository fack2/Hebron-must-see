const forvoApi =require('forvo')

const getArabicListPronunciation =  (req,res,next)=>{
  console.log(encodeURI(req.params.sentence))
   const forvo = forvoApi.default({ key: process.env.FORVO_KEY});
   console.log(req.params)
  forvo.pronouncedWordsSearch({ search: encodeURI(req.params.sentence), language: 'ar' })
  .then(result=>
    res.json(result.items)
  )

  .catch(err => {
    console.log("hereeee")
    console.log("err",err)
    next(err)})

}
module.exports = {getArabicListPronunciation}
