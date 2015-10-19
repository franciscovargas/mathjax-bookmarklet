! function() {

    function a(a) {
        var b = '.MathJax .mn {background: inherit;} .MathJax .mi {color: inherit;} .MathJax .mo {background: inherit;}',
            c = a.createElement('style');
        c.innerText = b;
        try {
            c.textContent = b
        } catch (d) {}
        a.getElementsByTagName('body')[0].appendChild(c);
        var f, e = a.createElement('script');
        e.src = '//cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_HTMLorMML.js', e.type = 'text/javascript', f = 'MathJax.Ajax.config.path[\'Contrib\']=\'//cdn.mathjax.org/mathjax/contrib\';MathJax.Hub.Config({tex2jax:{inlineMath:[[\'$\',\'$\'],[\'$$\', \'$$\']],displayMath:[[\'\\\\[\',\'\\\\]\']],processEscapes:true},TeX:{extensions: [\'[Contrib]/xyjax/xypic.js\']}});MathJax.Hub.Startup.onload();', window.opera ? e.innerHTML = f : e.text = f, a.getElementsByTagName('head')[0].appendChild(e)
    }

    function b(b) {
        void 0 === b.MathJax ? a(b.document) : b.MathJax.Hub.Queue(new b.Array('Typeset', b.MathJax.Hub))
    }
    // window.setInterval(function(){
        var d, e, c = document.getElementsByTagName('iframe');
        for (b(window), d = 0; d < c.length; d++) e = c[d].contentWindow || c[d].contentDocument, e.document || (e = e.parentNode), b(e)
    // }, 1000);
}()