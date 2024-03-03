import { Skeleton } from "@/components/ui/skeleton";

export default function DynamicSkeleton() {
	return (
		<div className="flex border-b border-gray-700 p-4 bg-black">
			<div className="flex flex-col">
				<div className="flex items-center">
					<Skeleton className="h-5 w-72 rounded-md" />
				</div>
				<div className="mt-2">
					<Skeleton className="h-48 w-full rounded-lg" />
				</div>
			</div>
		</div>
	);
}