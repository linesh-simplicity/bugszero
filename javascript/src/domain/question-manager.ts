import { Categories } from "./category";

export class QuestionManager {
  private questions: object = {
    [Categories.Rock]: [],
    [Categories.Sports]: [],
    [Categories.Pop]: [],
    [Categories.Science]: [],
    [Categories.History]: [],
    [Categories.Blues]: []
  };

  constructor() {
    this.initQuestions();
  }

  private initQuestions() {
    for (let i = 0; i < 50; i++) {
      // @ts-ignore
      for (const questionType of Object.values(Categories)) {
        this.questions[questionType].push(createQuestion(questionType, i));
      }
    }

    function createQuestion(questionType: string, i: number) {
      return `${questionType} Question ${i}`;
    }
  }

  public getQuestion(category: string) {
    return this.questions[category].shift();
  }

  private currentCategory(place: number) {
    // @ts-ignore
    const questionTypes = Object.values(Categories);
    const result = questionTypes[place % questionTypes.length];

    console.log(`The category is ${result}`);
    return result;
  }

  public temp_getQuestion(position: number) {
    const currentCategory = this.currentCategory(position);
    return this.getQuestion(currentCategory);
  }
}
