const radioButtons = document.querySelectorAll('input[name="design_choice"]');

const answerPrompt = document.querySelector('#answerPrompt');

const answerSection = document.querySelector('#answerSection');

const answerResult = document.querySelector('#answerResult');
const answerFollowUp = document.querySelector('#answerFollowUp');
const answerExplanation = document.querySelector('#answerExplanation');

radioButtons.forEach(radio => {
    

    radio.addEventListener('click', function() {
        
        answerPrompt.style.display = 'none';

        answerSection.style.display = 'block';

        if (this.value === '1') {
            answerResult.innerHTML = "정답입니다!";
            answerFollowUp.innerHTML = "<br>1번 사진 속 문에는 당기는 손잡이 대신 평평한 '푸시 플레이트'가 붙어 있습니다. <br> 사용자는 이 문을 보자마자 자연스럽게 당길 수 없고 밀어야 한다고 즉각적으로 인지할 수 있기 때문에 좋은 디자인입니다.<br><br><br> "
            answerExplanation.innerHTML = "좋은 디자인과 나쁜 디자인의 차이는 '사용자를 얼마나 배려했는가'에 있습니다. <br>단순히 예쁨만이 좋은 디자인이 아니며, 좋은 디자인은 사용자가 아무런 스트레스 없이 <br>원하는 바를 이루도록 하지만 나쁜 디자인은 그 과정에 장벽을 만듭니다.";
        
        } else {
            answerResult.innerHTML = "오답입니다!";
            answerFollowUp.innerHTML = "<br> 2번 사진 속 문은 '노먼 도어'인데, <br> 밀어야 하는 문(Push)에 당기는 손잡이(Pull)가 달려 있거나,<br> 그 반대의 경우처럼 사용자가 문의 형태를 보고 기대한 행동과 실제 작동 방식이 달라 혼란을 주는 문을 말합니다.<br>사용자에게 혼란을 주는 디자인이기 때문에 나쁜 디자인으로 분류됩니다.<br><br><br>";
            answerExplanation.innerHTML = "좋은 디자인과 나쁜 디자인의 차이는 '사용자를 얼마나 배려했는가'에 있습니다. <br>단순히 예쁨만이 좋은 디자인이 아니며, 좋은 디자인은 사용자가 아무런 스트레스 없이 <br>원하는 바를 이루도록 하지만 나쁜 디자인은 그 과정에 장벽을 만듭니다.";
        }
    });
});