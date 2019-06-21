<?php
/*
Template Name: Шаблон страницы оплата
Template Post Type: page, post
*/

?>

<?php get_header(); ?>


<!-- Заголовок конструктора -->

<div class="t-Header t-HeaderConstructor">
      <h1><?php the_field('payment-page-title'); ?></h1>
      <p><?php the_field('payment-page-text'); ?></p>
</div> <!-- t-HeaderConstructor -->

<!-- END Заголовок конструктора -->


<div class="eq-wrapper paymentWrapper">


	<!-- Блок оплата в офисе -->
    <a class="link_non_decor" name="top"><p class="paymentHeader">Оплата в офисе</p></a>
    
    <p class="paymentP">
        Адрес: 295017, РФ, Республика Крым, г. Симферополь, ул. Стахановцев 3<br>
        Оплата производиться через платежный терминал (без комиссии)<br>
        Пн-Пт: с 08:00 до 17:00; Сб: с 10:00 до 15:00; Вс - выходной
    </p>

    <div class="clearfix"></div>

    <div>
        <script type="text/javascript" charset="utf-8" src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=Svs4iCycSOvO4Mgcy88qxxlKqXGOeuUF&width=100%&height=300"></script>
    </div>

    <!-- Блок оплата по реквизитам -->
    <a class="link_non_decor" name="top"><p class="paymentHeader">Оплата по реквизитам</p></a>
    
    <p class="rekvizit-notice paymentP">
        Обращаем Ваше внимание, что при совершении оплаты услуг через банк денежные средства на Ваш счет будут перечислены в течении 3-4 банковских дней. Позаботьтесь пожалуйста заблаговременно об оплате.
    </p>
    
    <p class="bankRekvizitTitle paymentP">
       Банковские реквизиты для оплаты Физическим лицам: 
    </p>
    
    <p class="bankRekvizitSubTitle paymentP">
       <strong>Индивидуальный предприниматель Белов Руслан Викторович</strong><br>
    Юридический адрес: 295023, Республика Крым, г. Симферополь, ул. Лазурная, дом 10 
    </p>
    
    <div class="bankRekvizitContainer">
        <p class="bankRekvizitText">
            <strong>АО «ГЕНБАНК»</strong><br>
            ИНН 910212608105<br>
            р/счёт 40802810600230000523<br>
            ОГРНИП 316910200212301<br>
            Банк: АО «ГЕНБАНК»<br>
            БанкИК  043510123<br>
            Кор. Счёт № 30101810835100000123
        </p>
        <p class="bankRekvizitText">
            <strong>РНКБ БАНК (ПАО)</strong><br>
            ИНН 910212608105<br>
            р/счёт 40802810442310003043<br>
            Банк: РНКБ Банк (ПАО)<br>
            БИК 043510607<br>
            Кор. Счёт № 30101810335100000607
        </p>
    </div>

    <p class="bankRekvizitTitle paymentP">
       Банковские реквизиты для оплаты Юридических лиц: 
    </p>
    
    <p class="bankRekvizitSubTitle paymentP">
       <strong>ООО «РЕАЛ-ВЕБ КРЫМ»</strong><br>
    Юридический адрес: 295017, Республика Крым, г. Симферополь, ул. Стахановцев 3 
    </p>
    
    <div class="bankRekvizitContainer">
        <p class="bankRekvizitText">
            ИНН 9102007241<br>
            КПП 910201001<br>
            р/счёт 40702810942740042753<br>
            Банк: РНКБ Банк (ПАО)<br>
            БИК 043510607<br>
            Кор. счёт № 30101810335100000607
        </p>
    </div>

    <div class="clearfix"></div>

    <br>
    <!-- Блок оплата с помощью терминалов -->
    <a class="link_non_decor" name="middle"><p class="paymentHeader">Оплата с помощью терминалов</p></a>
    
    <p class="bankRekvizitSubTitle paymentP">
    Оплатить доступ в сеть Интернет можно с помощью платежных терминалов <strong>24Alltime</strong> и <strong>PayBerry</strong> круглосуточно и в любом месте.<br>
    Для пополнения нужно зайти на страницу «Интернет» и выбрать <strong>REALWEB</strong> ввести в терминале номер Вашего лицевого счета*. Средства поступают на счет мгновенно. Обязательно сохраняйте квитанцию!<br>
    </p>
    
    <p class="rekvizit-notice paymentP">
        <strong>*Номер лицевого счета можно уточнить по телефону технической поддержки 24/7 +7-978-747-36-84</strong> 
    </p>
    
    <p class="bankRekvizitSubTitle paymentP">
        Адреса терминалов <strong>PayBerry</strong> вы можете посмотреть <a href="https://drive.google.com/file/d/0B_6jBw2uPr3oN2RPTHhnLS0yaXc/edit" class="terminalAdressLink"> по ссылке</a><br>
        Адреса терминалов <strong>24alltime</strong>:
    </p>

        <div>
            <script type="text/javascript" charset="utf-8" src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=zTEl9j8WJN6WU2qewoMpF5GxLiYdqn-f&width=100%&height=600"></script>
        </div>

    <br>

    <!-- QIWI -->
    <a class="link_non_decor" name="middle"><p class="paymentHeader">Оплата через платежную систему QIWI (Киви), (комиссия 5%)</p></a>
    
    <p class="bankRekvizitSubTitle">
        Для оплаты необходимо зайти на страницу «Интернет и Телефония» выбрать <strong>REALWEB</strong> и ввести номер Вашего лицевого счета*.
    </p>
    
    <p class="rekvizit-notice">
        <strong>*Номер лицевого счета можно уточнить по телефону технической поддержки 24/7 +7-978-747-36-84</strong> 
    </p>
    <br>
    <a class="link_non_decor" name="bottom"><p class="paymentHeader">Оплата через сервисы РНКБ</p></a>
    
    <p class="bankRekvizitSubTitle paymentP">
    Оплатить услугу доступа к сети Интернет можно в Интернет-банке РНКБ  или мобильном приложении РНКБ 24/7
    </p>
    
    <p class="bankRekvizitListTitle paymentP"><strong>В мобильном приложении Вам необходимо:</strong></p>
    
    <ul class="bankRekvizitList">
        <li class="bankRekvizitListItem">
            В разделе «Платежи и переводы» выбрать «Интернет и ТВ», далее находим <strong>ИП Белов Руслан Викторович(RealWeb)</strong>
        </li>
        <li class="bankRekvizitListItem">
            Вводите свои данные (Ваш лицевой счет, ФИО, адрес..)
        </li>
        <li class="bankRekvizitListItem">
            Подтверждаете оплату кодом из СМС-сообщения
        </li>    
    </ul>
    <br>
    
    <p class="bankRekvizitSubTitle paymentP">
        Комиссия за осуществление платежа согласно тарифов банка
    </p>

    <p class="bankRekvizitListTitle paymentP"><strong>В интернет-банке Вам необходимо:</strong></p>
    <ul class="bankRekvizitList">
        <li class="bankRekvizitListItem">
            В меню «Платежи и переводы» выбрать «Интернет»
        </li>
        <li class="bankRekvizitListItem">
            Выбрать получателя <strong>ИП Белов Руслан Викторович(RealWeb)</strong>
        </li>
        <li class="bankRekvizitListItem">
            Заполнить данные платежа (в номере договора вводите Ваш лицевой счет)
        </li>
        <li class="bankRekvizitListItem">
            Подтверждаете оплату.
        </li>    
    </ul>
    <br>
    
    <p class="bankRekvizitSubTitle paymentP">
        *Вы можите создать «Шаблон», чтобы в будущем просто повторить оплату или подключить «Периодический платеж с карты». Для этого достаточно отметить галочкой пункт «Я хочу создать отложенный платеж или регулярный платеж».<br><br>
        Также, оплатить доступ к сети Интернет можно с помощью терминалов самообслуживания РНКБ Банк (ПАО)
    </p>
    
    <p class="rekvizit-notice paymentP">
        <strong>*Номер лицевого счета можно уточнить по телефону технической поддержки 24/7 
    +7-978-747-36-84
    </strong> 
    
    </p>


</div> <!-- eq-wrapper -->

</div> <!-- pageContainer -->

<!-- футер -->
<?php get_footer(); ?>
<!-- END футер --> 
