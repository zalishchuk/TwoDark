import { shade, tint } from 'polished'

function background(color) {
  return shade(0.5, color)
}

function foreground(color) {
  return tint(0.3, color)
}

export default {
  'actionBar.toggledBackground': background('#525761'),
  'activityBar.background': background('#282c34'),
  'activityBar.foreground': foreground('#d7dae0'),
  'activityBarBadge.background': '#4d78cc',
  'activityBarBadge.foreground': foreground('#f8fafd'),
  'badge.background': background('#282c34'),
  'button.background': background('#404754'),
  'button.secondaryBackground': background('#30333d'),
  'button.secondaryForeground': foreground('#c0bdbd'),
  'checkbox.border': background('#404754'),
  'debugToolBar.background': background('#21252b'),
  descriptionForeground: '#abb2bf',
  'diffEditor.insertedTextBackground': '#00809b33',
  'dropdown.background': background('#21252b'),
  'dropdown.border': background('#21252b'),
  'editor.background': background('#282c34'),
  'editor.findMatchBackground': '#d19a6644',
  'editor.findMatchBorder': '#ffffff5a',
  'editor.findMatchHighlightBackground': '#ffffff22',
  'editor.foreground': foreground('#abb2bf'),
  'editor.lineHighlightBackground': background('#2c313c'),
  'editor.selectionBackground': '#67769660',
  'editor.selectionHighlightBackground': '#ffd33d44',
  'editor.selectionHighlightBorder': '#dddddd',
  'editor.wordHighlightBackground': '#d2e0ff2f',
  'editor.wordHighlightBorder': '#7f848e',
  'editor.wordHighlightStrongBackground': '#abb2bf26',
  'editor.wordHighlightStrongBorder': '#7f848e',
  'editorBracketHighlight.foreground1': '#d19a66',
  'editorBracketHighlight.foreground2': '#c678dd',
  'editorBracketHighlight.foreground3': '#56b6c2',
  'editorBracketMatch.background': background('#515a6b'),
  'editorBracketMatch.border': '#515a6b',
  'editorCursor.background': '#ffffffc9',
  'editorCursor.foreground': '#528bff',
  'editorError.foreground': '#c24038',
  'editorGroup.background': background('#181a1f'),
  'editorGroup.border': '#181a1f',
  'editorGroupHeader.tabsBackground': background('#21252b'),
  'editorGutter.addedBackground': '#109868',
  'editorGutter.deletedBackground': '#9A353D',
  'editorGutter.modifiedBackground': '#948B60',
  'editorHoverWidget.background': background('#21252b'),
  'editorHoverWidget.border': '#181a1f',
  'editorHoverWidget.highlightForeground': '#61afef',
  'editorIndentGuide.activeBackground1': '#c8c8c859',
  'editorIndentGuide.background1': '#3b4048',
  'editorInlayHint.background': background('#2c313c'),
  'editorInlayHint.foreground': foreground('#abb2bf'),
  'editorLineNumber.activeForeground': foreground('#abb2bf'),
  'editorLineNumber.foreground': foreground('#495162'),
  'editorMarkerNavigation.background': background('#21252b'),
  'editorOverviewRuler.addedBackground': '#109868',
  'editorOverviewRuler.deletedBackground': '#9A353D',
  'editorOverviewRuler.modifiedBackground': '#948B60',
  'editorRuler.foreground': '#abb2bf26',
  'editorSuggestWidget.background': background('#21252b'),
  'editorSuggestWidget.border': '#181a1f',
  'editorSuggestWidget.selectedBackground': background('#2c313a'),
  'editorWarning.foreground': '#d19a66',
  'editorWhitespace.foreground': '#ffffff1d',
  'editorWidget.background': background('#21252b'),
  focusBorder: '#3e4452',
  'gitDecoration.ignoredResourceForeground': foreground('#636b78'),
  'input.background': background('#1d1f23'),
  'input.foreground': foreground('#abb2bf'),
  'list.activeSelectionBackground': background('#2c313a'),
  'list.activeSelectionForeground': foreground('#d7dae0'),
  'list.focusBackground': background('#323842'),
  'list.focusForeground': foreground('#f0f0f0'),
  'list.highlightForeground': foreground('#ecebeb'),
  'list.hoverBackground': background('#2c313a'),
  'list.hoverForeground': foreground('#abb2bf'),
  'list.inactiveSelectionBackground': background('#323842'),
  'list.inactiveSelectionForeground': foreground('#d7dae0'),
  'list.warningForeground': '#d19a66',
  'menu.foreground': foreground('#abb2bf'),
  'menu.separatorBackground': background('#343a45'),
  'minimapGutter.addedBackground': '#109868',
  'minimapGutter.deletedBackground': '#9A353D',
  'minimapGutter.modifiedBackground': '#948B60',
  'panel.border': '#3e4452',
  'panelSectionHeader.background': background('#21252b'),
  'peekViewEditor.background': background('#1b1d23'),
  'peekViewEditor.matchHighlightBackground': background('#29244b'),
  'peekViewResult.background': background('#22262b'),
  'scrollbar.shadow': '#23252c',
  'scrollbarSlider.activeBackground': '#747d9180',
  'scrollbarSlider.background': '#4e566660',
  'scrollbarSlider.hoverBackground': '#5a637580',
  'settings.focusedRowBackground': background('#282c34'),
  'settings.headerForeground': foreground('#fff'),
  'sideBar.background': background('#21252b'),
  'sideBar.foreground': foreground('#abb2bf'),
  'sideBarSectionHeader.background': background('#282c34'),
  'sideBarSectionHeader.foreground': foreground('#abb2bf'),
  'statusBar.background': background('#21252b'),
  'statusBar.debuggingBackground': '#cc6633',
  'statusBar.debuggingBorder': '#ff000000',
  'statusBar.debuggingForeground': foreground('#ffffff'),
  'statusBar.foreground': foreground('#9da5b4'),
  'statusBar.noFolderBackground': background('#21252b'),
  'statusBarItem.remoteBackground': background('#21252b'),
  'statusBarItem.remoteForeground': foreground('#f8fafd'),
  'tab.activeBackground': background('#282c34'),
  'tab.activeBorder': '#b4b4b4',
  'tab.activeForeground': foreground('#dcdcdc'),
  'tab.border': '#181a1f',
  'tab.hoverBackground': background('#323842'),
  'tab.inactiveBackground': background('#21252b'),
  'tab.unfocusedHoverBackground': background('#323842'),
  'terminal.ansiBlack': '#3f4451',
  'terminal.ansiBlue': '#4aa5f0',
  'terminal.ansiBrightBlack': '#4f5666',
  'terminal.ansiBrightBlue': '#4dc4ff',
  'terminal.ansiBrightCyan': '#4cd1e0',
  'terminal.ansiBrightGreen': '#a5e075',
  'terminal.ansiBrightMagenta': '#de73ff',
  'terminal.ansiBrightRed': '#ff616e',
  'terminal.ansiBrightWhite': '#e6e6e6',
  'terminal.ansiBrightYellow': '#f0a45d',
  'terminal.ansiCyan': '#42b3c2',
  'terminal.ansiGreen': '#8cc265',
  'terminal.ansiMagenta': '#c162de',
  'terminal.ansiRed': '#e05561',
  'terminal.ansiWhite': '#d7dae0',
  'terminal.ansiYellow': '#d18f52',
  'terminal.background': background('#282c34'),
  'terminal.border': '#3e4452',
  'terminal.foreground': foreground('#abb2bf'),
  'terminal.selectionBackground': '#abb2bf30',
  'textBlockQuote.background': background('#2e3440'),
  'textBlockQuote.border': '#4b5362',
  'textLink.foreground': '#61afef',
  'textPreformat.foreground': '#d19a66',
  'titleBar.activeBackground': background('#282c34'),
  'titleBar.activeForeground': foreground('#9da5b4'),
  'titleBar.inactiveBackground': background('#282c34'),
  'titleBar.inactiveForeground': foreground('#6b717d'),
  'tree.indentGuidesStroke': '#ffffff1d',
  'walkThrough.embeddedEditorBackground': background('#2e3440'),
  'welcomePage.buttonHoverBackground': background('#404754'),
}
