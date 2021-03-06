import { h, Component } from 'preact';

import './Header.scss';

import logo from './assets/qiwi-logo.svg';
import widgetPic from './assets/widget-pic.png';

/*<a href={'/?publicKey='+publicKey} class="header__logo"><img src={logo} alt="logo" width="140" height="61" /></a>*/

export default class Header extends Component {
    render({ idWidgetsBlock, widgetMerchantName, publicKey }) {
        const defaultWidgetMerchantName = 'Наименование организации';

        return (
            <header class="header">
                <div className="header__gradient-block-top" />
                <div className="header__gradient-block-bottom" />

                <section class="header__call-to-action">
                    <h1 class="header__title">
                        Привлеки своих пользователей, покупателей и читателей к
                        добрым делам!
                    </h1>
                    <p class="header__description">
                        {widgetMerchantName
                            ? `Размести платежную форму у себя на сайте и поддержи ${widgetMerchantName}.`
                            : 'Размести платежную форму у себя на сайте и поддержи благотворительность.'}
                    </p>
                    <a
                        href={`#${idWidgetsBlock}`}
                        class="header__action"
                        onClick={() => {
                            dataLayer.push({
                                event: 'to.widgets',
                                eventAction: 'Transition to widgets block'
                            });
                        }}>
                        Разместить виджет
                    </a>
                </section>
                <div class="header__illustration">
                    <img
                        src={widgetPic}
                        alt="widgets"
                        width="480"
                        height="720"
                        class="header__widgets-pic"
                    />
                    <div class="header__widget-link header__widget-link--upper">
                        <a href={'/?publicKey=' + publicKey}>
                            У меня есть сайт
                        </a>
                    </div>
                    <div class="header__widget-title">
                        {widgetMerchantName || defaultWidgetMerchantName}
                    </div>
                    <div class="header__widget-button">Помочь</div>
                    <div class="header__widget-link header__widget-link--lowwer">
                        <a href={'/?publicKey=' + publicKey}>
                            У меня есть сайт
                        </a>
                    </div>
                    <div class="header__widget-title header__widget-title--second">
                        {widgetMerchantName || defaultWidgetMerchantName}
                    </div>
                </div>
            </header>
        );
    }
}
