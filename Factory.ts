interface Button {
  render(): void;
  onClick(f): void;
}

abstract class Dialog {
  abstract createButton(): Button;

  render(): void {
    const okButton: Button = this.createButton();
    okButton.render();
  }
}

class WindowsButton implements Button{
  render(): void {}
  onClick(f): void {}
}

class WindowsDialog extends Dialog {
  createButton(): Button {
    return new WindowsButton();
  }
}

class HTMLButton implements Button {
  render(): void {}
  onClick(f): void {}
}

class WebDialog extends Dialog {
  createButton(): Button {
    return new HTMLButton();
  }
}

class DialogFactory {
  initialize({ type }): Dialog {
    let dialog: Dialog = null;
    if (type === "Windows") {
      dialog = new WindowsDialog();
    }

    if (type === "Web") {
      dialog =  new WebDialog()
    }
    return dialog;
  }
}

const windowsDialog = new DialogFactory().initialize({ type: "Windows" });
windowsDialog.render();
