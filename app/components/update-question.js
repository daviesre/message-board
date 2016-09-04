import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm:false,
  actions:{
    updateQuestionForm(){
      if(this.updateQuestionForm){
        this.set('updateQuestionForm',false);

      }else{
        this.set('updateQuestionForm',true);
      }
    },
    updateQuestion(question){
      var params={
        title:this.get('title'),
        author:this.get('author'),
        content:this.get('content')
      };

      this.set('updateQuestionForm',false);
      this.sendAction('updateQuestion',question,params);
    }
  }
});
