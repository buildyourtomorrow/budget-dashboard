
app.controller('MonthlyExpensesCtrl', ['$scope', 'monthlyExpensesFactory', 'auth', function($scope, monthlyExpensesFactory, auth){
	$scope.isLoggedIn = auth.isLoggedIn;
	$scope.monthlyExpenses = monthlyExpensesFactory.monthlyExpenses;
	$scope.totalSpent = monthlyExpensesFactory.totalSpent

	$scope.monthlyExpenseForm = function(){
		monthlyExpensesFactory.postMonthlyExpense($scope.description, $scope.amount);

		monthlyExpensesFactory.monthlyExpenses.push({ 'amount': $scope.amount, 'description': $scope.description });
		monthlyExpensesFactory.calcTotalSpent(monthlyExpensesFactory.monthlyExpenses);
		monthlyExpensesFactory.calcPeriodStart();
		monthlyExpensesFactory.calcPeriodEnd();
		monthlyExpensesFactory.calcToday();
		monthlyExpensesFactory.calcDailyBudget();
		monthlyExpensesFactory.calcUpBy();
		monthlyExpensesFactory.calcDaysLeft();
		
		$scope.spendingLimit = monthlyExpensesFactory.spendingLimit;
		$scope.totalSpent = monthlyExpensesFactory.totalSpent;
		$scope.leftOver = monthlyExpensesFactory.spendingLimit[0] - monthlyExpensesFactory.totalSpent;
		$scope.upBy = monthlyExpensesFactory.upBy;
		$scope.dailyBudget = monthlyExpensesFactory.dailyBudget;
		$scope.daysLeft = monthlyExpensesFactory.daysLeft;
		$scope.periodStart = monthlyExpensesFactory.periodStart[0];
		$scope.periodEnd = monthlyExpensesFactory.periodEnd[0];
		$scope.today = monthlyExpensesFactory.today[0];

		$scope.form.$setPristine();
		$scope.amount='';
		$scope.description='';
	};
}]);