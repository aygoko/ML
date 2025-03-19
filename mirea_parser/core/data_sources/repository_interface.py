class RepositoryInterface:
    def get_data(self, url: str) -> str | None:
        raise NotImplementedError