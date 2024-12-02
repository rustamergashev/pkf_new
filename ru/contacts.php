<?php  include('top.php') ?>      
    <main>
        <section class="section">
            <div class="container">                
                <div class='crumbs'>
                    <a href="index.html" title="Home">Главный</a>
                    <span>Контакты</span>                    
                </div>
                <h2>Контакты</h2>
                <div class="row">
                    <div class="col-md-6">
                        <p>Вы нас найдете:</p>
                        <p>100016| 1-проезд | ул. Авиасозлар, дом 22 | Ташкент, Узбекистан <br />
                            Tel.: +99871 294-73-86 | fax: +99871 294-73-85. <br />
                            www.pkf.uz   |   info@pkf.uz   |   www.pkf.com
                        </p>
                        <hr />  
                        <p><i>Карта для проезда</i></p>
                        <p align ="center"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.7584577874786!2d69.33211691588865!3d41.29236107927301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzMyLjUiTiA2OcKwMjAnMDMuNSJF!5e0!3m2!1sru!2s!4v1456295609622" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe></p>
                    </div>                    
                    <style>
                        label { display:block; }
                        input.text,textarea { width:250px;font:12px/12px 'calibri',courier,monospace;color:#333;padding:3px;margin:1px 0;border:1px solid #ccc; }
                        input.submit { padding:2px 5px;font:bold 12px/12px verdana,arial,sans-serif; }
                        .contacts {
                            float: right; 	width: 95%;	padding: 10px 0; margin-top:10px; margin-right:15px;
                        }
                    </style>
                    <div class="col-md-6">
                        <form action="./contacts.php" method="post" id="cForm">
                            <input type="hidden" name="act" value="y" />
                            <fieldset style="border:0;margin:15px;padding:0;">
                                <label for="posName"><b>Ваше имя:</b></label>
                                <input class="text" type="text" size="25" name="posName" id="posName" />
                                <label for="posEmail"><b>Ваш E-mail адрес:</b></label>
                                <input class="text" type="text" size="25" name="posEmail" id="posEmail" />
                                <label for="posRegard"><b>Ваш телефон:</b></label>
                                <input class="text" type="text" size="25" name="posRegard" id="posRegard" />
                                <label for="posSubject"><b>Тема</b></label>
                                <select name="posSubject" id="posSubject">
                                    <option value="" selected="selected"> - Выберите -</option>
                                    <option value="Вопрос">Вопрос</option>
                                    <option value="Деловое предложение">Деловое предложение</option>
                                    <option value="Реклама">Реклама</option>
                                    <option value="Жалоба">Жалоба</option>
                                </select>          
                                <label for="posText"><b>Текст:</b></label>
                                <textarea cols="80" rows="15" name="posText" id="posText"></textarea>
                                <label for="posCaptcha"><center><b>Текст на изображении</b>:</label><a href='readme.html'><img src="kcaptcha?PHPSESSID=vb748qn6tn05ql3rc587h9fgj5" border=0></a></center><input class="text" type="text" size="25" name="keystring" id="keystring" />
                                <br /><br /><label><input class="submit" type="submit" name="selfCC" id="selfCC" value=" Отправить " /></label>
                            </fieldset>
                            <center><a href='kcaptcha/kcaptcha_copy.php' target='_blank'><font size=-2 color=#dddddd>�</font></a></center>
                            <center><a href='readme.html'> </a></center>
                        </form>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <h2 class="mt-3 mb-3"></h2>
                        </div>
                    </div>                    
                </div>
            </div>    
        </section>
    </main>
    <?php  include('bottom.php') ?>  