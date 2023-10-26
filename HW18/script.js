var MicroCode = (function () {
	return {
	  init: function (inputSel, outputSel, languageSel) {
		this.focusInput(inputSel);
		this.listenForInput(inputSel);
		this.listenForLanguage(languageSel, '.code-output', inputSel);
		this.renderOutput(outputSel, document.querySelector(inputSel).value);
		this.listenerForScroll(inputSel, outputSel);
	  },
  
	  listenForInput: function (inputSel) {
		var self = this;
  
		document.querySelector(inputSel).addEventListener('input', function (event) {
		  var input = this;
		  var selStartPos = input.selectionStart;
		  var inputVal = input.value;
  
		  if (event.keyCode === 9) {
			input.value = inputVal.substring(0, selStartPos) + '    ' + inputVal.substring(selStartPos, input.value.length);
			input.selectionStart = selStartPos + 4;
			input.selectionEnd = selStartPos + 4;
			event.preventDefault();
		  }
  
		  self.renderOutput('.code-output', this.value);
		});
  
		Prism.highlightAll();
	  },
  
	  listenForLanguage: function (languageSel, outputSel, inputSel) {
		var self = this;
		document.querySelector(languageSel).addEventListener('change', function () {
		  var codeElements = document.querySelectorAll('code', document.querySelector(outputSel));
		  for (var i = 0; i < codeElements.length; i++) {
			codeElements[i].classList.remove();
			codeElements[i].classList.add('language-' + this.value);
			codeElements[i].removeAttribute('data-language');
		  }
  
		  document.querySelector(outputSel).classList.remove();
		  document.querySelector(outputSel).classList.add('code-output', 'language-' + this.value);
  
		  document.querySelector(inputSel).value = '';
		  for (var i = 0; i < codeElements.length; i++) {
			codeElements[i].textContent = '';
		  }
  
		  self.focusInput(inputSel);
		});
	  },
  
	  listenerForScroll: function (inputSel, outputSel) {
		document.querySelector(inputSel).addEventListener('scroll', function () {
		  document.querySelector(outputSel).scrollTop = this.scrollTop;
		});
	  },
  
	  renderOutput: function (outputSel, value) {
		var codeElement = document.querySelector('code', document.querySelector(outputSel));
		codeElement.innerHTML = value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '\n';
  
		Prism.highlightAll();
	  },
  
	  focusInput: function (inputSel) {
		var input = document.querySelector(inputSel);
		input.focus();
		input.selectionStart = input.value.length;
		input.selectionEnd = input.value.length;
	  },
	};
  })();
  
  MicroCode.init('.code-input', '.code-output', '.language');
  