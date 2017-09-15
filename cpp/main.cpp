#include <cstdio>
#include <future>
#include <list>
#include <string>

std::future<std::string> DownloadFile(const std::string &url) {
	std::string result = co_await std::async(std::launch::async, [url]() -> std::string {
		std::this_thread::sleep_for(std::chrono::seconds(std::rand() % 5));
		return url;
	});

	co_return result;
}

std::future<void> DownloadInfo(std::string url) {
	std::string info = co_await DownloadFile(url + "/api/info");
	printf("Downloaded: %s\n", info.c_str());

	std::string status = co_await DownloadFile(url + "/api/status");
	printf("Downloaded: %s\n", status.c_str());
	
	std::string vehicle = co_await DownloadFile(url + "/api/vehicle");
	printf("Downloaded: %s\n", vehicle.c_str());
}

int main() {
	std::list<std::future<void>> futures;

	for (int i = 0; i < 10; ++i) {
		auto future = DownloadInfo("http://www.example.com/" + std::to_string(i));
		futures.push_back(std::move(future));
	}

	for (auto &future : futures) {
		future.wait();
	}

	return 0;
}
