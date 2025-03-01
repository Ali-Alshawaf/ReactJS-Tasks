import './LanguageBtn.css';


export default function LanguageBtn(){

    return(
        <div className="btn-container">
            <label className="switch btn-color-mode-switch">
                <input  value="1" id="color_mode" name="color_mode" type="checkbox" />
                <label className="btn-color-mode-switch-inner" data-off="عربي" data-on="إنجليزي" htmlFor="color_mode"></label>
            </label>
        </div>
    );
}