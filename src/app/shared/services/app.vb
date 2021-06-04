Set WEAP_App = CreateObject("WEAP.WEAPApplication")

    WEAP_App.ActiveArea = Worksheets("Config").Range("configWEAPArea").Value
    WEAP_App.ActiveScenario = Range("user")
    'WEAP_App.View = "Schematic"
    WEAP_App.Visible = True
