import { sum, sentimentAnalysis } from '../src/client/js/formHandler'

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1,2)).toBe(3);
})

// // It doesn't work
// global.fetch = require("node-fetch");
// function FormDataMock() {
//   this.append = jest.fn();
// }
// global.FormData = FormDataMock

// describe("Testing the sumbit functionality", () => {
//   test("Testing the sentimentAnalysis() function", () => {

//     const input = {key: process.env.API_KEY, text: "this is a text" }
//     const output = {
//       "status": {
//         "code": "0",
//         "msg": "OK",
//         "credits": "1",
//         "remaining_credits": "19946"
//       },
//       "model": "general_en",
//       "score_tag": "NONE",
//       "agreement": "AGREEMENT",
//       "subjectivity": "OBJECTIVE",
//       "confidence": "100",
//       "irony": "NONIRONIC",
//       "sentence_list": [
//         {
//           "text": "this is a test",
//           "inip": "0",
//           "endp": "13",
//           "bop": "y",
//           "confidence": "100",
//           "score_tag": "NONE",
//           "agreement": "AGREEMENT",
//           "segment_list": [
//             {
//               "text": "this is a test",
//               "segment_type": "secondary",
//               "inip": "0",
//               "endp": "13",
//               "confidence": "100",
//               "score_tag": "NONE",
//               "agreement": "AGREEMENT",
//               "polarity_term_list": [],
//               "sentimented_concept_list": [
//                 {
//                   "form": "exam",
//                   "id": "d01b3dc623",
//                   "variant": "test",
//                   "inip": "10",
//                   "endp": "13",
//                   "type": "Top>Event",
//                   "score_tag": "NONE"
//                 }
//               ]
//             }
//           ],
//           "sentimented_entity_list": [],
//           "sentimented_concept_list": [
//             {
//               "form": "exam",
//               "id": "d01b3dc623",
//               "type": "Top>Event",
//               "score_tag": "NONE"
//             }
//           ]
//         }
//       ],
//       "sentimented_entity_list": [],
//       "sentimented_concept_list": [
//         {
//           "form": "exam",
//           "id": "d01b3dc623",
//           "type": "Top>Event",
//           "score_tag": "NONE"
//         }
//       ]
//     }

//     expect(sentimentAnalysis(input.key, input.text)).toEqual(output)
//   })
// })