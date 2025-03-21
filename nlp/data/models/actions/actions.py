from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher

class ActionРасписаниеПересдачи(Action):
    def name(self) -> Text:
        return "action_расписание_пересдачи"

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict) -> List[Dict[Text, Any]]:
        дисциплина = next(tracker.get_latest_entity_values("дисциплина"), None)
        if дисциплина:
            # Здесь должен быть код, который получает данные из БД или API
            дата = "15.11.2023"  # Пример
            dispatcher.utter_message(text=f"Пересдача по {дисциплина} — {дата}.")
        else:
            dispatcher.utter_message(text="Укажите название дисциплины.")
        return []