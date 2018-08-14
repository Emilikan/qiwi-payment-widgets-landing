import { h, Component } from 'preact';

import LibraryNav from '../LibraryNav';
import Library from '../Library';

import './Widgets.scss';

export default class Widgets extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll = (event) => {
        this.setState({
            topForPos:this.widgetLibraryBlock.getBoundingClientRect().top
        });
    };

    render({idWidgetsBlock, widgetsLibrary, widgetAliasCode, widgetUrl, publicKey, noCacheFlag, addMessage}, {topForPos}){
        return (<section class="widgets" id={idWidgetsBlock}>
            <h1 class="widgets__title">Выберите нужный размер и скопируйте код для внедрения на собственный сайт</h1>
            <div class="widgets__library" ref={ c => this.widgetLibraryBlock = c }>
                <LibraryNav widgetsLibrary={widgetsLibrary} topForPos={topForPos} publicKey={publicKey}/>
                <Library widgetsLibrary={{...widgetsLibrary,widgetUrl,publicKey,noCacheFlag,addMessage,widgetAliasCode}}/>
            </div>

        </section>);
    }
}