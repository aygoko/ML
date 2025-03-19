from delivery.mirea_parser_service import MireaParserService
import logging

logging.basicConfig(level=logging.INFO, 
                    format='%(asctime)s - %(levelname)s - %(message)s')

def main():
    logging.info("Начало парсинга данных МИРЭА")
    service = MireaParserService()
    data = service.get_all_data()
    
    print("\nРезультаты парсинга:")
    for section, content in data.items():
        print(f"\n{section}:")
        if isinstance(content, dict):
            for key, value in content.items():
                print(f"  {key}: {value}")
        elif isinstance(content, list):
            for item in content:
                if hasattr(item, '__dict__'):
                    print(f"  {item.__class__.__name__}: {item.__dict__}")
                else:
                    print(f"  {item}")
        else:
            print(f"  {content.__dict__}")

if __name__ == "__main__":
    main()